const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const USERschema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:6
    },
    email:{
        type:String,
        required:true,
        max:255,
        min:6
    },
    password:{
        type:String,
        required:true,
        max:2048,
        min:8
    },
    date:{
        type:Date,
        default:Date.now
    }
});

USERschema.methods.generateToken = async function () {
    const user = this
    const token = jwt.sign(
      { user: user._id.toString() },
        process.env.SECURITY_KEY, {
            expiresIn: 36000
    })
  
    return token
}

module.exports=mongoose.model('User',USERschema);