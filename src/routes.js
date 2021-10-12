const express = require("express");
const app=express.Router();
const req_mods=require("./app_register.json");
function main(){var e=[],r=0;Object.keys(req_mods).forEach(s=>{e.push(require(`./${s}/main`)),app.use(`/${req_mods[s]}`,e[r].routes),r+=1})}
main();
module.exports=app;
