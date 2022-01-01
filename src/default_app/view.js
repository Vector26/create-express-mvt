// Imports
const model=require('./models');
const path = require('path');
// __________________________________________________
// Functions/Views to render for R&r(requests & responses) using data-models

function index(req, res){
    res.sendFile(path.join(__dirname+'/index.html'));
}

// __________________________________________________

// Exports

module.exports.index=index;