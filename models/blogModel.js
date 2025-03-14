import { Schema, model } from "mongoose";

const blogSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    coverImage: { type: String, required: true },
    date: { type: Date },
  },
  { versionKey: false, timestamps: true }
);

blogSchema.pre("save", function (next) {
  if (!this.date) {
    this.date = new Date();
  }
  next();
});

export const blogModel = model("blog", blogSchema);
