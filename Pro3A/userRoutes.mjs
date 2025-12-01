import express from "express";
import userModel from "./newUserModel.mjs";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

// Register
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body; // Destructure the incoming data from req.body 

  try {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({   //Change here according to model as per newUserModel.mjs
      username,
      email,
      password: hashPassword
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
  const { username, password } = req.body;

  try {
    const user = await userModel.findOne({ username });

    if (!user) {
      return res.status(401).json({ message: "user not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.json({ message: "invalid credentials" });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      "shakthivelk",    //where your own secret key should be placed
      { expiresIn: "20m" }
    );

    res.json({ token });

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
