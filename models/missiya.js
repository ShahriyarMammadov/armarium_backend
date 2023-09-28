import { Schema, model } from "mongoose";

const missionSchema = new Schema(
  {
    about: { type: String, required: true },
    date: { type: Date },
  },
  { versionKey: false, timestamps: true }
);

missionSchema.pre("save", function (next) {
  if (!this.date) {
    this.date = new Date();
  }
  next();
});

export const missionModel = model("mission", missionSchema);
