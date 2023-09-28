import { Schema, model } from "mongoose";

const newsSchema = new Schema(
  {
    coverImage: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: Date },
    cardDescription: { type: String, required: true },
    description: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

newsSchema.pre("save", function (next) {
  if (!this.date) {
    this.date = new Date();
  }
  next();
});

export const newsModel = model("news", newsSchema);
