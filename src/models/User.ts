import { Schema } from "mongoose";

const USER = new Schema(
  {
    name: String,
    email: String,
  },
  {
    timestamps: true,
  }
);

export default USER;
