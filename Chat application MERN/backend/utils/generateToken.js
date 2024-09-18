import jwt from 'jsonwebtoken'

const genarateTokenAndSetCookie = (userId,res) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn: '15d'
    })

    res.cookie("jwt",token,{
        maxAge: 15 * 24 * 60 * 60 * 1000, //Msec 
        httpOnly:true, //prevent xss attacks cross-site scripting atacks
        sameSize:"strict", //CSRF attacks cross-site forgery attacks
        secure: process.env.NODE_ENV !== "development",
    });
};

export default genarateTokenAndSetCookie;