import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

export const protectRoute = async (req, res) => {
    try {
        const token = req.cookies.jwt

        if(!token){
            return res.status(401).json({message:"Unauthorized Access"})
        }
    }
    catch (error) {
        console.log("Error in login controller: ", error.message)
        res.status(500).json({ message: "Internal Server Error" })
    }
}