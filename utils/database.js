
import mongoose from "mongoose"

let connected=false;


const connectToDatabase=async()=>{
    try{
     mongoose.set("strictQuery",true);
    if(connected){
        console.log("Database already connected");
        return;
    }
    console.log("Database connection String", process.env.MONGO);
    await mongoose.connect(process.env.MONGO,{
        dbName:"Promptopia",
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    connected=true;
    console.log("connectedToDatabase");
    }
    catch(err){
        console.log("Error occured in connecting to database");
    }
}


export default connectToDatabase;
