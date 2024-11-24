import jwt from "jsonwebtoken"

export const generateToken = (userId, res)=>{

    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "7d"
    })

    res.cookie("jwt", token, 
        {
            maxAge: 7*24*60*60*1000, // milisecons
            httpOnly: true, // prevent xxs attact cross-site scripting attact
            sameSite: "strict", // CSFC attact cross-site request forgery attact
            secure: process.env.NODE_ENV !== "devlopment"
        }
    )

    return token;
}