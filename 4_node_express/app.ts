import express, { Request, Response } from "express";
import axios from "axios";
var exphbs = require("express-handlebars");
const bodyParser = require("body-parser");

const app: express.Application = express();

app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");
app.use(express.static("public"));

app.use(function (req: express.Request, res, next) {
  console.log(req.query);
  next();
});

app.get("/", function (req: express.Request, res: express.Response) {
  res.render("home", { test: "Marcin" });
});

app.get("/post/:id", async (req: Request, res: Response) => {
  console.log(req.params);

  try {
    const id = req?.params?.id;
    const data = await axios.get(`http://localhost:8080/people/${id}`);
    res.render("post", data.data);
  } catch (error) {
    console.error(error)
  }
});

app.post("/add", async function (req: Request, res: Response) {
  console.log(req.body);
  try {
    const respo = await axios.post("http://localhost:8080/people", req.body);

    console.log(respo.data);

    res.status(201).send("OK");
  } catch (error) {
    res.send(error);
  }
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
