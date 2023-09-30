import { Schema, model } from "mongoose";

const backImageSchema = new Schema(
  {
    coverImage: { type: String, required: true },
    page: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

export const backImageModel = model("backGroundImage", backImageSchema);
