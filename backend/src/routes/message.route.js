import express from "express"
import { protectRoute } from "../middleware/auth.Protect.js"
import { getUsersForSidebar } from "../controllers/message.controller.js"


const router = express.Router()

router.get("/users", protectRoute, getUsersForSidebar)

export default router