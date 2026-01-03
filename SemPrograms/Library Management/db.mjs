import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://<username>:<password>@cluster0.xxxxxx.mongodb.net/LibraryManagement"//replace with your MongoDB connection string
    );

    console.log("Connected to Database...");
  } catch (error) {
    console.error("Database Connection Error:", error.message);
  }
};

export default connectDB;