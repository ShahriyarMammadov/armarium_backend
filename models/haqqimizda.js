import mongoose, { Schema, model } from "mongoose";

const AboutSchema = new Schema(
  {
    about: { type: String, required: true },
    date: { type: Date },
  },
  { versionKey: false, timestamps: true }
);

AboutSchema.pre("save", function (next) {
  if (!this.date) {
    this.date = new Date();
  }
  next();
});

export const aboutModel = model("about", AboutSchema);
