// Admin router handling registration, login, and item management with role-based access control
import express from "express";
import itemModel from "./items.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import authorize from "./newAuth.mjs";

const router = express.Router();
// Register and Login routes is same for all type of the Questions asked in the Semester
// Register
router.post("/register", async (req, res) => {
  const { userName, password, role } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new itemModel({
      userName,
      password: hashPassword,
      role
    });

    await newUser.save();
    res.status(201).json({ message: "Registration successful..." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await itemModel.findOne({ userName });

    if (!user) {
      return res.status(401).json({ message: "user not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ message: "invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role }, //payload for token user id and role
      "shakthivelk",
      { expiresIn: "20m" }
    );

    res.json({ token });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
// End of Register and Login routes

//  ADD new item by admin only

router.post(
  "/",
  authorize(["admin"]),  // Protect this route for 'admin' role only
  async (req, res) => {
    const {name,category,price,StockQuantity,description} = req.body;// destructuring the req body according to the schema
    try {
    const newItem = new itemModel({ 
      name,                                // change the fields as per requirement given in the question
      category,
      price,
      StockQuantity,
      description
    });
    await newItem.save();   
    res.status(201).json({ message: "New record added", data: newItem });
    }
    catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }    
  }
);


//  UPDATE item by admin only
router.put("/:id",authorize(["admin"]), async (req, res) => {
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

//  DELETE item by admin only
router.delete("/:id", authorize(["admin"]), async (req, res) => {
  try {
    const item = await itemModel.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });

    res.status(200).json({ message: "Deleted successfully", data: item });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

export default router;
