const express = require("express");
const app=express.Router();

var test=require('./app1/main');

app.use('/tests',test.routes);

module.exports=app;
