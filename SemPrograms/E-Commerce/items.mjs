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
});
const Item = mongoose.model("Item", itemSchema);

export default Item;
