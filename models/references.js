import { Schema, model } from "mongoose";

const referencesSchema = new Schema(
  {
    images: { type: Array, required: true },
    coverImage: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: Date },
  },
  { versionKey: false, timestamps: true }
);

referencesSchema.pre("save", function (next) {
  if (!this.date) {
    this.date = new Date();
  }
  next();
});

export const referencesModel = model("reference", referencesSchema);
