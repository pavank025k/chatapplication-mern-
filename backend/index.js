import express from "express";
import authRoutes from "./routes/auth.js"
import dotenv from "dotenv";

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import routers from "./routes/message.route.js"
import cors from "cors";
import { app, server } from "./lib/socket.io.js";
import { connectDB } from "./lib/db.js";

//require('dotenv').config();
app.use(bodyParser.json())
app.use(cookieParser());
app.use(cors({
     origin:"http://localhost:5173",
     credentials:true, 
}))
dotenv.config();
app.use("/api/auth",authRoutes)
app.use("/api/message",routers);  
app.use(express.json());

server.listen(process.env.PORT ,()=>{
     console.log("your server is running");
     connectDB();
   
   
    
})

