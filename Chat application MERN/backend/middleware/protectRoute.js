import jwt from "jsonwebtoken";

const protectRoute = (req,res,next) => {
    try {
        const token = req.cookies.jwt
    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message)
        res.status(500).json({error:"internal server error"})
    }
}
