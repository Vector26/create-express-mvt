const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const routes=require('./routes');
const mongoose = require("mongoose");
require('dotenv').config();
const displayRoutes  = require('./displayR');

const PORT=process.env.PORT;

// Middlewares
app.use(express.json());

// DataBase

mongoose.connect(`${process.env.DB_HOST}`).then(con =>{ 
    // console.log(con.connections)
    console.log("DB CONNECTED!")
  }).catch(err=>{
    
  });

//Routes

app.use('/',routes);

// server start

app.listen(PORT,()=>{
    displayRoutes(app);
    console.log(`Server is running on localhost:${PORT}`);
});