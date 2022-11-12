const express = require("express");
const app = express();
const port = 8080;
const mysql = require("mysql");
let connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "node_db",
});

let insertFunc = (name, body) => {
  let query = `INSERT INTO categories(\`name\`, \`body\`) VALUES('${name}','${body}')`;
  connection.query(query, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.log(result);
  });
};

// insertFunc("Nuts", "Our nuts are great!");
let myRes;
let selectFunc = () => {
  let query = `SELECT name AS 'Name', body AS 'Description' FROM categories`;
  connection.query(query, (err, result) => {
    if (err) throw err;

    myRes = result;
    console.log(myRes);
    callRes();
  });
};
let callRes = () => {
  console.log(`${myRes[0].Name}`);
  console.log(`${myRes[1].Name}`);
};

selectFunc();
// let msg = "Hello World!";
// console.log(msg);
// console.log(app);

// app.listen(port, () => {
//   console.log(`listening to port ${port}`);
// });
// app.get("/", (req, res) => {
//   res.send("This is very cool");
// });
// app.get("/cat", (req, res) => {
//   res.send("I like cats");
// });
