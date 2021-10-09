const mongoose = require("mongoose");

// Model Primitive Members

demoModel={
    name:{
        type:String,
        required:[true,"Please Enter your name"]
    },
    email:{
        type:String,
        required:[true,"Please specify your email"],
        unique:true,
        validate:[validator.isEmail,'Please provide a valid email']
    },
    password:{
        type:String,
        required:[true,'Please specify your password'],
        minLength:8,
        select:false
    }
}
const Schema = mongoose.Schema(demoModel);

// Model pre/post/async functions

demoModel.methods.toStr=()=>{
    return this.name;
}

// Exports


module.exports.demoModel=mongoose.model('demo',demoModel);