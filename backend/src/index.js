import express from "express"
import authRouters from "./routes/auth.route.js";

const app = express();


app.use("/api/auth", authRouters)



app.listen(5001, ()=>{
    console.log("server is running on post 5001");
})