var express = require("express");
var PORT = process.env.PORT || 3030;

var app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exHandl = require("express-handlebars");

app.engine("handlebars", exHandl({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burger_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("listening on http://localhost:" + PORT);
})