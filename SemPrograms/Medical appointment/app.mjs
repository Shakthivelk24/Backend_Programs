import express from "express";
import connectDB from "./db.mjs";
import medicalRouter from "./medicalRouter.mjs";
import adminRouter from "./adminRouter.mjs";

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

app.use("/admin", adminRouter);
app.use("/doctor", medicalRouter);

app.listen(3000, () => {
  console.log(`Server running at port http://localhost:${3000}`);
});