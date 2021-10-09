const express = require("express");
const app=express.Router();
const req_mods={
    "default_app":"get_started"
};
// Import your modules here
// {"NAME_OF_APP":"ROUTE_TITLE",....}
function main(){var e=[],r=0;Object.keys(req_mods).forEach(s=>{e.push(require(`./${s}/main`)),app.use(`/${req_mods[s]}`,e[r].routes),r+=1})}
main();
module.exports=app;
