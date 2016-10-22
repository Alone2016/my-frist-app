var express = require('express');
var mongoose = require('mongoose');
var db = require('./config/database');
var app = express();
var server = require('http').createServer(app);
mongoose.connect(db.url);
var port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
server.listen(port);
console.log('Server is running on '+ port);
exports = module.exports=app;