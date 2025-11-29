//Change the Schema and Model as per the requirements or Qustion
// Here we are creating Item Schema and Model
import mongoose from "mongoose"; 
const itemSchema= mongoose.Schema({
             name:{ type:String, required:true },
             category:{ type:String, required:true },
             price:{ type:Number, required:true }, 
             date:{ type: Date, default: Date.now }
 })
 const itemModel = mongoose.model('Items',itemSchema)
 export default itemModel