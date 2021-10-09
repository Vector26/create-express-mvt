const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const routes=require('./routes');
const mongoose = require("mongoose");

const PORT=6969;

// Middlewares
app.use(express.json());

// DataBase

mongoose.connect("mongodb+srv://plannerAdmin:nfsedge26@cluster0.qkev8.mongodb.net/myFirstDatabase?retryWrites=true&w=majority").then(con =>{ 
    // console.log(con.connections)
    console.log("DB CONNECTED!")
  });

//Routes

app.use('/',routes);

// server start

app.listen(PORT,()=>{
    console.log(`Server is running on localhost:${PORT}`);
});