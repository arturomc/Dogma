var express = require("express");
var server  = express();

var port = process.env.PORT || 3000;

server.use("/", express.static(__dirname+"/public"));

server.listen(port, function(){
  console.log("server listening on port: " + port);
});
