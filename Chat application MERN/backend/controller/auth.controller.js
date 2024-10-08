import bcrypt from 'bcryptjs';

import User from '../models/user.models.js'
import genarateTokenAndSetCookie from '../utils/generateToken.js';
export const signup = async (req,res) => {
    try {
       const {fullName,username,password,confirmPassword,gender}  = req.body;

       if(password !== confirmPassword){
        return res.status(400).json({error : "Password don't match"})
       }
      
       const user = await User.findOne({ username });

       if(user) {
        return res.status(400).json({error :"Username already exists"})
       }
       //https://avatar-placeholder.iran.liara.run/

    //Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt)

     const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
     const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`

     const newUser = new User({
        fullName,
        username,
        password:hashedPassword,
        gender,
        profilepic : gender === "male" ? boyProfilePic : girlProfilePic
     });

     

     if(newUser){
      //Generate JWT Token 
      genarateTokenAndSetCookie(newUser._id,res);

      await newUser.save();


     res.status(201).json({

        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilepic: newUser.profilepic
     });
    }
    else{
      res.status(400).json({
        error:"Invalid user data"
      });
    }
    

    } catch (error) {
        console.log("Error in signup controller",error.message)
        res.status(500).json({error : "Interval Server error"})
        
    }
};


export const login = async(req,res) => {
    try {
      const {username,password} = req.body;
      const user = await User.findOne({username});
      const isPasswordCorrect = await bcrypt.compare(password,user?.password || "")

      if(!user || !isPasswordCorrect){
        return res.status(400).json({error:"Invalid user and password"})
      }
      genarateTokenAndSetCookie(user._id,res);

      res.status(200).json({
        _id: user._id,
        fullName: user.fullName,
        username: user.username,
        profilepic: user.profilepic,
      });
      
    } catch (error) {
      console.log("Error in login controller",error.message)
        res.status(500).json({error : "Interval Server error"})
    }
}

export const logout = (req,res) => {
    try {
      res.cookie("jwt","",{maxAge:0})
      res.status(200).json({msg:"logged out successfully"})
    } catch (error) {
      console.log("Error in logout controller",error.message)
        res.status(500).json({error : "Interval Server error"})
    }
}
