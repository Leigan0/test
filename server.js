var express = require("express");

const server = express();

server.get('/', function(req, res){
    res.send('test');
})

server.listen(3000);
