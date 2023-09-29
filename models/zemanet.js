import { Schema, model } from "mongoose";

const ZemanatSchema = new Schema(
  {
    about: { type: String, required: true },
    date: { type: Date },
  },
  { versionKey: false, timestamps: true }
);

ZemanatSchema.pre("save", function (next) {
  if (!this.date) {
    this.date = new Date();
  }
  next();
});

export const zemanetModel = model("zemanet", ZemanatSchema);
