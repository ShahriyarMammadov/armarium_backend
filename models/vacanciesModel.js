import { Schema, model } from "mongoose";

const vacanciesSchema = new Schema(
  {
    name: { type: String, required: true },
    coverImage: { type: String },
    description: { type: String, required: true },
    date: { type: Date },
  },
  { timestamps: true }
);

vacanciesSchema.pre("save", function (next) {
  if (!this.date) {
    this.date = new Date();
  }
  next();
});

export const vacanciesModel = model("vacancies", vacanciesSchema);
