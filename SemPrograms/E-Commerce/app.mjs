import express from "express";
import connectDB from "./db.mjs";
import itemRouter from "./itemRouter.mjs";
import adminRouter from "./adminRouter.mjs";

const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Use item router for routes starting with /items
// Use admin router for routes starting with /admin
// change the path as needed
app.use("/admin", adminRouter);
app.use("/items", itemRouter);

app.listen(3000, () => {
  console.log(`Server running at port http://localhost:${3000}`);
});
