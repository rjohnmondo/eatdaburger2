// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "Badger32",
  database: "eatdaburger2"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("You are connected to the eatdaburger2 database with : " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;