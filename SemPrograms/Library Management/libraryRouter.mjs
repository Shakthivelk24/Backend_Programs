import express from "express";
import libraryModel from "./library.mjs";

const router = express.Router();

//  GET all items
router.get("/", async (req, res) => {
  try {
    const items = await libraryModel.find({ author:{ $exists: true } });

    if (items.length === 0) {
      return res.status(404).json({ message: "No books found" });
    }

    res.status(200).json({ data: items });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

//  GET single item by ID
router.get("/:id", async (req, res) => {
  try {
    const item = await libraryModel.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "book not found" });

    res.status(200).json({ data: item });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;