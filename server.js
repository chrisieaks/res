var http = require('http');

var express = require('express');
var app = express();

var PORT = process.env.PORT || 3001;


app.listen(PORT, function(){
    console.log(`Listening on http:/localhost:${PORT}`);
});
