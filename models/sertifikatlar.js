import { Schema, model } from "mongoose";

const CertificateSchema = new Schema(
  {
    coverImage: { type: String, required: true },
    date: { type: Date },
  },
  { versionKey: false, timestamps: true }
);

CertificateSchema.pre("save", function (next) {
  if (!this.date) {
    this.date = new Date();
  }
  next();
});

export const CertificateModel = model("certificate", CertificateSchema);
