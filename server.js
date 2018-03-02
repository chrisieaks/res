// Dependencies
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var PORT = process.env.PORT || 3001;

// Handle data parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var tables = [];

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'home.html'))
});

app.get('/tables', function(req, res){
    
});

app.listen(PORT, function(){
    console.log(`Listening on http:/localhost:${PORT}`);
});
