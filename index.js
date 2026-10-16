import express from "express";
import { strikerRouter } from "./routes/strikerRouter.js"

import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set("views", (__dirname + "/views"));

app.use(express.static(__dirname + '/public'));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/striker", strikerRouter);

app.get("/", (req, res) => {
  console.log("hi");
  res.render("indexview", {name:"Dubu"});
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/form.html");
});

app.post("/form", (req, res) => {
  console.log(req.body);
  res.send(req.body.name);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`)
});