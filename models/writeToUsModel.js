import { Schema, model } from "mongoose";

const writeToUsSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String },
    text: { type: String, required: true },
    date: { type: Date },
  },
  { versionKey: false, timestamps: true }
);

writeToUsSchema.pre("save", function (next) {
  if (!this.date) {
    this.date = new Date();
  }
  next();
});

export const writeToUsModel = model("writeToUs", writeToUsSchema);
