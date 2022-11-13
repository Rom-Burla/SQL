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

// let gameArr = [
//   {
//     name: "God of war",
//     platforms: "PS4, PS5, PC",
//     rating: 94,
//     price: 19.99,
//   },
//   {
//     name: "God of war: Ragnarok",
//     platforms: "PS4, PS5",
//     rating: 94,
//     price: 69.99,
//   },
//   {
//     name: "Call of duty: Modern Warfare 2",
//     platforms: "PS4, PS5, Xbox One, Xbox Seiries, PC",
//     rating: 87,
//     price: 69.99,
//   },
// ];

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "sqlhw3",
});

// let insertGames = `INSERT INTO games(\`name\`, \`platforms\`, \`metacritic_rating\`, \`price\`) VALUES`;
// let msg = "";

// gameArr.forEach((game, index) => {
//   let sign = index === gameArr.length - 1 ? ";" : ",";
//   msg += `("${game.name}","${game.platforms}",${game.rating},${game.price})${sign}`;
// });

// let builtQuery = insertGames + msg;

// let insertGame = () => {
//   connection.query(builtQuery, (err, result) => {
//     if (err) console.log(err);
//     console.log(result);
//   });
// };
// insertGame();

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
  console.log(req.params);
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
