// change the schema as per requirement given in the question
import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: Number,
  },
  StockQuantity: {
    type: Number,
  },
  description: {
    type: String,
  },
  // add this fields for any question given in the semester
  // and this will be same for all type of the questions
  userName: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
  },
  // end of additional fields
});
const Item = mongoose.model("Item", itemSchema);

export default Item;
