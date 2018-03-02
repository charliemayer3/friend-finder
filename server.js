var express = require("express");
var bodyParser = require("body-parser");

// Sets up the Express App
// =============================================================
var app = express();
var port = 3000;
// var port = process.env.PORT || 3000;

// app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app)
require("./app/routing/htmlRoutes.js")(app)

app.listen(port, function() {
  console.log("App now listening at localhost:" + port);
});
