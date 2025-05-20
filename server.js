// var http = require('http');
// http.createServer(function(request, response){
// 	response.write("Hello World!");
// 	response.end(); //close connection
// }).listen(80); //http port
var express = require("express");
var server = express();

var bodyParser = require("body-parser");


server.use(express.static(__dirname+"/public"));
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());

// server.get("/", function (req, res) { //web root
//     res.send("Hello, World!"); //回傳固定內容
// });
 server.get("/score", function (req, res) { //other pages
    //save db
     res.send("req /md");
 });
 
server.listen(80);
