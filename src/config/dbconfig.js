const Sequelize = require("sequelize");

const db = new Sequelize("college", "root", "root123", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = db;

// const mysql = require("mysql2");

// const conn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root123",
//   database: "college",
// });

// conn.connect((error) => {
//   if (error) throw error;
//   console.log("Connection to the database established");
// });

// module.exports = conn;
