import express from "express";
import itemModel from "./item.mjs";

const router = express.Router();

//  GET all items
router.get("/", async (req, res) => {
  try {
    const items = await itemModel.find();
    if (items.length === 0)
      return res.status(404).json({ message: "Items not found" });

    res.status(200).json({ data: items });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

//  POST new item
router.post("/", async (req, res) => {
  const { name, category, price } = req.body; // Destructure fields from request body as per Schema
  try {
    const item = new itemModel({ name, category, price }); //change fields as per Schema
    await item.save();

    res.status(201).json({ message: "New record added", data: item });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

//  GET single item by ID
router.get("/:id", async (req, res) => {
  try {
    const item = await itemModel.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });

    res.status(200).json({ data: item });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

//  UPDATE item
router.put("/:id", async (req, res) => {
  try {
    const item = await itemModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!item) return res.status(404).json({ message: "Item not found" });

    res.status(200).json({ message: "Updated successfully", data: item });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

//  DELETE item
router.delete("/:id", async (req, res) => {
  try {
    const item = await itemModel.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });

    res.status(200).json({ message: "Deleted successfully", data: item });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
