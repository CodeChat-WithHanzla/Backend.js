import { Schema, model } from "mongoose";
const subsciptionSchema = Schema(
  {
    subscriber: {
      type: Schema.types.ObjectId, // User which is going to subscribe
      ref: "User",
    },
    channel: {
      type: Schema.types.ObjectId, // Channel (which is also a user) which is gonnna be subscribe
      ref: "User",
    },
  },
  { timestamps: true },
);

export const Subscription = model("Subscription", subsciptionSchema);
