import { Schema, model } from "mongoose";

const doorsSchema = new Schema(
  {
    id: { type: String, required: true },
    price: { type: Number },
    coverImage: { type: String, required: true },
  },
  { versionKey: false, timestamps: true }
);

export const doorsModel = model("doors", doorsSchema);
