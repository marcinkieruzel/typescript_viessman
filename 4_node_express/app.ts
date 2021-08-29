import express from "express";
var exphbs = require("express-handlebars");

const app: express.Application = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static('public'))

app.get("/", function (req: express.Request, res: express.Response) {
  res.render("home", {test: "Hello World"});
});

app.get("/", function (req: express.Request, res: express.Response) {
  res.render("home", {test: "Hello World"});
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});