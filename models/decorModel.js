import mongoose, { Schema, model } from "mongoose";

// card Description elave et
const decorSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    images: { type: Array, required: true },
    coverImage: { type: String, required: true },
    date: { type: Date },
  },
  { versionKey: false, timestamps: true }
);

decorSchema.pre("save", function (next) {
  if (!this.date) {
    this.date = new Date();
  }
  next();
});

export const decorModel = model("decor", decorSchema);
