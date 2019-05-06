var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("<h1>Hello world</h1>");
});
app.get("/:Sargis", function(req, res){
   var name = req.params.Sargis;
   res.send("<h1>Hello " + name +"</h1>");
});
app.listen(5000, function(){
   console.log("Example is running on port 5000");
});