const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const routes=require('./routes');
const mongoose = require("mongoose");
require('dotenv').config();
const displayRoutes  = require('./displayR');
const rt= require('create-express-mvt');
const PORT=process.env.PORT;

// Middlewares
app.use(express.json());

// DataBase
mongoose.connect(`${process.env.DB_HOST}`).then(con =>{ 
    // console.log(con.connections)
    // console.log(rt);
    var admin=new rt.Admin(con);
    app.use("/admin",admin.getRouter());
    console.log("DB CONNECTED!")
  }).catch(err=>{
    console.log("Error in DB connection");
    console.log(err);
  });

//Routes
app.use('/',routes);
// server start
app.listen(PORT,()=>{
    displayRoutes(app);
    console.log(`Server is running on localhost:${PORT}`);
});