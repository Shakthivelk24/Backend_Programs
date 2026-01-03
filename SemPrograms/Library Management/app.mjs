import express from "express";
import connectDB from "./db.mjs";
import libraryRouter from "./libraryRouter.mjs";
import adminRouter from "./adminRouter.mjs";

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use item router for routes starting with /library
// Use admin router for routes starting with /admin
// change the path as needed
app.use("/admin", adminRouter);
app.use("/library", libraryRouter);

app.listen(3000, () => {
  console.log(`Server running at port http://localhost:${3000}`);
});