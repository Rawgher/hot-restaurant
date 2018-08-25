// REQUIREMENTS
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// 
var app = express();
var PORT = process.env.PORT || 3000;

var reservation = [
  {
    routeName: "butthole",
    name: "butthole",
    phone: "9167363935",
    email: "butthole@gmail.com"                                    
  }
];

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });
  
  app.get("/api/create_reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservationForm.html"));
  });

  app.get("/api/reservation", function(req, res) {
    res.sendFile(path.join(__dirname, "reservationViews.html"));
  });
  
  // Displays a single character, or returns false
  app.get("/api/reservation/:newReservation", function(req, res) {
    var reservationPlaced = req.params.newReservation;

    console.log(reservationPlaced);

    for (var i = 0; i < reservation.length; i++) {
      if (reservationPlaced === reservation[i].routeName) {
        return res.json(reservation[i]);
      }
    }

    return res.json(false);
});

app.post("/reservationViews", function(req, res) {
  var newReservation = req.body;

  newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();

  // console.log(newReservation);

  reservation.push(newReservation);

  res.json(reservation);            
  
});

// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

