const express = require("express");
const router = express.Router();
const func=require('./view');

router.get("/",func.start);
router.get("/end",func.end);

module.exports=router;
// module.exports=router;