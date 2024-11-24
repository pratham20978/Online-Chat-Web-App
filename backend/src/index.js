import express from "express"
import authRouters from "./routes/auth.route.js";
import dotenv from "dotenv"
import {connectDB} from "./lib/db.js"
import cookieParser from "cookie-parser"


dotenv.config()
const app = express();
const PORT = process.env.PORT

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRouters)



app.listen(PORT, async ()=>{
    console.log("server is running on port:", PORT);
    await connectDB()
})