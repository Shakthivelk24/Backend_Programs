import express from "express";
import connectDB from "./db.mjs";
import studentModel from "./student.mjs";

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

//  GET all students
app.get("/", async (req, res) => {
  try {
    const students = await studentModel.find();
    if (students.length === 0)
      return res.status(404).json({ message: "Students not found" });

    res.status(200).json({ data: students });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

//  POST new student
app.post("/", async (req, res) => {
  const { name, email, age, course } = req.body; // Destructure fields from request body as per Schema
  try {
    const student = new studentModel({ name, email, age, course }); //change fields as per Schema
    await student.save();

    res.status(201).json({ message: "New record added", data: student });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

//  GET single student by ID
app.get("/:id", async (req, res) => {
  try {
    const student = await studentModel.findById(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });

    res.status(200).json({ data: student });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

//  UPDATE student by ID
app.put("/:id", async (req, res) => {
  try {
    const student = await studentModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!student) return res.status(404).json({ message: "Student not found" });

    res.status(200).json({ message: "Updated successfully", data: student });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

//  DELETE student by ID
app.delete("/:id", async (req, res) => {
  try {
    const student = await studentModel.findByIdAndDelete(req.params.id);
    if (!student) return res.status(404).json({ message: "Student not found" });

    res.status(200).json({ message: "Deleted successfully", data: student });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

//  Start server
app.listen(3000, () => {
  console.log(`Server running at port http://localhost:${3000}`);
});
