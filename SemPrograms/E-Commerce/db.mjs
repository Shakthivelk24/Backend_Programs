// Database connection file
import mongoose from "mongoose";
const connetDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://<username>:<password>@cluster0.xxxxxx.mongodb.net/"
    ); //Replace with your own connection string
    console.log("conneted to Database.....");
  } catch (error) {
    console.log(error);
  }
};
export default connetDB;
