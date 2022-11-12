const express = require("express");
const app = express();
const mysql = require("mysql");
const { join } = require("path");
const port = 3000;

app.set("views", join(__dirname, "views"));
app.set("view engien", "ejs");

let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_db",
});

let insetProduct = () => {
  let query = `INSERT INTO products(\`title\`, \`body\`, \`price\`, \`cat_id\`) VALUES ("Peanuts", "Our Peanuts are not just for Elephants", 5.46, 3)`;
  connection.query(query, (err, res) => {
    if (err) console.log(err);
    console.log(result);
  });
};

const selectProds = async () => {
  let query = `SELECT * FROM products`;
  let data = await connection.query(query, (err, result) => {
    if (err) console.log(err);
  });
  return data;
};
let fruitsArr = ["banana", "mango", "watermalon", "pineapple"];
let choseFruit = () => {
  let rand = Math.floor(Math.random() * fruitsArr.length);
  return fruitsArr[rand];
};
app.get("/fruits", async (req, res) => {
  let query = `SELECT categories.name AS 'Category', products.title AS 'Name', products.body AS 'Description', products.price AS 'Price per KG' FROM \`products\`
LEFT JOIN categories ON categories.id=products.cat_id
ORDER BY products.title`;
  await connection.query(query, (err, result) => {
    if (err) console.log(err);
    res.render("index.ejs", { result });
    console.log(result);
  });
});

// insetProduct();
// selectProds();
app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
