
import mongoose from "mongoose";

export const connectDB=async ()=>{
    try{
        const conn=await mongoose.connect(process.env.MOONGO_URL);
        console.log(`connted sucessfully${conn.connection.host}`);
    }catch(err)
    {
     console.log("mongodb connection error",err);
    }
};
