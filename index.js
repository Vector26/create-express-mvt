// const auth=require('./routes/auth');
// const mongoose = require("mongoose");
// const dotenv = require('dotenv');
// dotenv.config();
// mongoose.connect(`${process.env.DB}`).then(()=>{
//     console.log("connected user");
// });
// module.exports.Auth=auth;
exports.Admin = require('./admin');