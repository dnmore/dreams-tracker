import mongoose from "mongoose";
import Dream from "../models/dream.model.js";
export const getDreams = async (req, res) => {
  try {
    const dreams = await Dream.find({});
    res.status(200).json({ success: true, data: dreams });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const createDream = async (req, res) => {
  const dream = req.body;

  if (!dream.title || !dream.description || !dream.mood || !dream.people || !dream.place || !dream.object) {
    return res
      .status(400)
      .json({ success: false, message: "All fields are required" });
  }

  const newDream = new Dream(dream);
  try {
    await newDream.save();
    res.status(201).json({ success: true, data: newDream });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateDream = async (req, res) => {
  const { id } = req.params;
  const dream = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Dream not found" });
  }

  try {
    const updatedDream = await Dream.findByIdAndUpdate(id, dream, {
      new: true,
    });

    res.status(200).json({ success: true, data: updatedDream });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteDream = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ success: false, message: "Dream not found" });
  }

  try {
    await Dream.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "Dream Deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
