//Change the Schema and Model as per the requirements or Qustion
// Here we are creating Item Schema and Model
import mongoose from "mongoose"; 
const studentSchema= mongoose.Schema({
             name:{ type:String, required:true },
             email:{ type:String, required:true },
             age:{ type:Number, required:true }, 
             course:{ type:String, required:true ,enum:['CSE','ECE','MECH','CIVIL','EEE']},
 })
 const studentModel = mongoose.model('Students',studentSchema)
 export default studentModel