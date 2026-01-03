//Change the Schema and Model as per the requirements or Qustion
// Here we are creating Item Schema and Model
import mongoose from "mongoose";
const librarySchema = mongoose.Schema({
  title: { type: String },
  author: { type: String },
  isbn: { type: String },
  category: { type: String },
  availability: { type: Boolean, default: false },
  username: { type: String },
  password: { type: String },
  role: { type: String ,enum:['admin','user']},  
});
const libraryModel = mongoose.model("Library", librarySchema);
export default libraryModel;