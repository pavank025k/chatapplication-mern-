import cloudinary from "../lib/cloudinary.js";
import User from "../models/user.model.js"
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../lib/socket.io.js";
export const getUersForSidebar=async(req,res)=>{
    try{
        const loggedInUserId=req.user._id;
        const filteredUsers=await User.find({_id:{$ne:loggedInUserId}}).select("-password");
     res.status(200).json(filteredUsers);
    }catch(err){
            console.log("err is getUsersForSidebar",err.message);
        res.status(500).json({message:"Internal Server"});
    }
}
export const getMessages=async(req,res)=>{
    try{
        const {id:userToChatId}=req.params
        const myId=req.user._id;
        const messages=await Message.find({
            $or:[
                {senderId:myId,receiverId:userToChatId},
                {senderId:userToChatId,receiverId:myId}
            ]
        })
        res.status(200).json(messages)
    }catch(err)
    {
            console.log("err is getMessages",err.message);
        res.status(500).json({message:"Internal Server"});
    }
}
export const sendMessage=async(req,res)=>{
    try{
        const{text,image}=req.body;
        const{id:receiverId}=req.params;
        const senderId=req.user._id;
        let imageUrl;
        if(image)
        {
            const uploadResponse=await cloudinary.uploader.upload(image);
            imageUrl=uploadResponse.secure_url;
        }
        const newMessage=new Message({
            senderId,
            receiverId,
            text,
            image:imageUrl,
        })
        await newMessage.save();
        //todo:realtime function goes here=>socket.io
        const receiverSocketId=getReceiverSocketId(receiverId);
        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage);
        }
        res.status(201).json(newMessage);
    }
    catch(err)
    {
            console.log("err is sendMessages",err.message);
        res.status(500).json({message:"Internal Server"});
    }
}