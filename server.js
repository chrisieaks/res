// Dependencies
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var PORT = process.env.PORT || 3001;


var Reservations = [
  {
    customerName: "yoda",
    phoneNumber: "12121212",
    customerEmail: "yodamaster@starwars.com",
    cunstomerID: "yodaman",
  },
  {
    customerName: "obiwankenobi",
    phoneNumber: "12121212",
    customerEmail: "jedikenobi@starwars.com",
    cunstomerID: "obikenobi",
  }
];

app.get("/api/:Reservations?", function(req, res) {
  var chosen = req.params.reservation;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < Reservations.length; i++) {
      if (chosen === Reservations[i].routeName) {
        return res.json(Reservations[i]);
      }
    }
    return res.json(false);
  }
  return res.json(Reservations);
});

app.post("/api/new", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newReservation = req.body;
  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newReservation.routeName = newReservation.cunstomerID.toLowerCase();

  console.log(newReservation);

  newReservation.push(newReservation);

  res.json(newReservation);
});

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
