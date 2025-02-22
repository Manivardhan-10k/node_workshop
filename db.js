const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mani@123",
  database: "23r_node",
});

connection.connect((err, res) => {
  err ? console.log(err) : console.log("database connected");
});

module.exports = connection;
