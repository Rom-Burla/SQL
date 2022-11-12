const express = require("express");
const app = express();
const mysql = require("mysql");
const { join } = require("path");

const port = 3000;

app.set("views", join(__dirname, "views"));
app.set("view engien", "ejs");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sqlhw3",
});

app.post("/addGame", (req, res) => {
  let { Game, Platforms, Rating, Price } = req.body;
  let query = `INSERT INTO games (\`name\`, \`platforms\`, \`metacritic_rating\`, \`price\`) VALUES
("${Game}", "${Platforms}", ${Rating}, ${Price});`;

  connection.query(query, (err, result) => {
    if (err) console.log(err);
    console.log(result);
  });
  res.redirect("/games");
});

app.post("/updateGame/:id", (req, res) => {
  let id = req.params.id;
  let { Platforms, Rating, Price } = req.body;
  let query = `Update games SET \`platforms\`="${Platforms}",\`metacritic_rating\`=${Rating}, \`price\`=${Price} WHERE \`id\` = ${id};`;
  connection.query(query, (err, result) => {
    if (err) throw err;
    console.log(result);
  });
  res.redirect("/games");
});

app.get("/update/:id", (req, res) => {
  let id = req.params.id;
  let query = `SELECT * FROM games WHERE \`id\` = ${id}`;
  connection.query(query, (err, result) => {
    if (err) console.log(err);
    console.log(result);
    res.render("update.ejs", { result });
  });
});

app.get("/delete/:id", (req, res) => {
  let id = req.params.id;
  let query = `DELETE FROM games WHERE \`id\`=${id}`;
  connection.query(query, (err, result) => {
    if (err) console.log(err);
    console.log(result);
  });
  res.redirect("/games");
});

app.get("/add", (req, res) => {
  res.render("add-game.ejs");
});

app.get("/games", async (req, res) => {
  let query = `SELECT * FROM games ORDER BY \`price\``;
  await connection.query(query, (err, result) => {
    if (err) console.log(err);
    res.render("index.ejs", { result });
  });
});

app.listen(port, () => {
  console.log("Listening to port " + port);
});
