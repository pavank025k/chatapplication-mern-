
import express from "express"
import { protectRoute } from "../middleware/auth.middleware.js";
import { getMessages, getUersForSidebar, sendMessage } from "../controllers/message.controller.js";
const routers=express.Router();
routers.get("/users",protectRoute,getUersForSidebar)
routers.get("/:id",protectRoute,getMessages)
routers.post("/send/:id",protectRoute,sendMessage)
export default routers;