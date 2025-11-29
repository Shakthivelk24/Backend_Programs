import mongoose from "mongoose"; 
const connetDB = async() => { 
try{
     await   mongoose.connect('mongodb+srv://<username>:<password>@cluster0.xxxxxx.mongodb.net/TestDB') // add your own mongoDB URL
console.log('conneted to Database.....') 
}catch(error)
{ 
      console.log(error)
 }
 }
 export default connetDB