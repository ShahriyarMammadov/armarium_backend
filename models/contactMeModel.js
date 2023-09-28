import { Schema, model } from "mongoose";

const contactMeSchema = new Schema(
  {
    phoneNumber: { type: String, required: true },
    date: { type: Date, default: Date.now() },
  },
  { versionKey: false, timestamps: true }
);

contactMeSchema.pre("save", function (next) {
  if (!this.date) {
    this.date = new Date();
  }
  next();
});

export const contactMeModal = model("contactMe", contactMeSchema);
