const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const User= require("../models/user");
const bcrypt=require("bcryptjs");
// const joi=require("@hapi/joi");

async function Register(req, res){
  console.log("register here");
  try {
    User.validate(req.body).catch((err)=>{
      if(err){
        return res.status(400).json({ message: err.message });
      }
    });
    const { name, email, password } = req.body;
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: "User already exists" });
    if (
      !email.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    )
      return res.status(400).json({ msg: "Invalid Mail Provided" });
    if (password.length < 8)
      return res
        .status(400)
        .json({ msg: "Password should be of 8 characters atleast" });
     user = new User({ name, email, password  });
    user.password = await bcrypt.hash(user.password, 8);
     await user.save();
    res.json({ msg: "User Created. Login!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}

async function Login (req, res){
  console.log("login here");
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "No User Founded" });
    if (!(await bcrypt.compare(password, user.password)))
      return res.status(400).json({ msg: "Password Mismatched" });
    const token = await user.generateToken();
    res.cookie("token", token, { httpOnly: true }).json(token);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal Server Error" });
  }
}


router.post("/register",Register);
router.post("/login",Login);

module.exports = router;