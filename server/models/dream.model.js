import mongoose from "mongoose";

const dreamSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    mood: {
      type: String,
      required: true,
    },
    people: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    object: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Dream = mongoose.model("Dream", dreamSchema);

export default Dream;
