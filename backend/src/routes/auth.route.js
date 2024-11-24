import express from "express"
import { signup, login, logout, updateProfile } from "../controllers/auth.controller.js"
import { protectRoute } from "../middleware/auth.Protect.js"

const router = express.Router()

router.post("/signup", signup)

router.post("/login", login)

router.post("/logout", logout)

router.put("/updateprofile", protectRoute, updateProfile )

export default router