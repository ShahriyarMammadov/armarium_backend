import { Schema, model } from "mongoose";

const salesPointSchema = new Schema(
  {
    gosterilenXidmetler: [{ type: String }],
    saat: { type: String },
    address: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    contactPerson: { type: String, required: true },
    date: { type: Date },
  },
  { versionKey: false, timestamps: true }
);

salesPointSchema.pre("save", function (next) {
  if (!this.date) {
    this.date = new Date();
  }
  next();
});

export const salesPointModel = model("salesPoint", salesPointSchema);
