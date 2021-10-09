const express = require("express");
const router = express.Router();
const functions=require('./view');

// __________________________________________________
// Router routes connections with functions imported into `const functions`

// router.get("/",functions.start);
// router.get("/end",functions.end);
// __________________________________________________

// Export (provide a single module i.e `router`.Though its not mandatory its recommended to maintain the MVT flow)

module.exports=router;
