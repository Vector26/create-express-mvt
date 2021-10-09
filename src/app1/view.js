
function start(req, res){
    res.json({item: 'Welcome ini separated page...'});
}

function end(req, res){
    res.json({item: 'Bye ini separated page...'});
}
module.exports.start=start;
module.exports.end=end;