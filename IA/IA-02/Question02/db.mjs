import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://<username>:<password>@cluster0.xxxxxx.mongodb.net/TestDB"
    );

    console.log("Connected to Database...");
  } catch (error) {
    console.error("Database Connection Error:", error.message);
  }
};

export default connectDB;
