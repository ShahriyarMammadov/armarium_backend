import { Schema, model } from "mongoose";

const doorsSchema = new Schema(
  {
    id: { type: String, required: true },
    price: { type: Number },
    coverImage: { type: String, required: true },
    date: { type: Date },
  },
  { versionKey: false, timestamps: true }
);

doorsSchema.pre("save", function (next) {
  if (!this.date) {
    this.date = new Date();
  }
  next();
});

export const doorsModel = model("doors", doorsSchema);
