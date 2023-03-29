const mysql = require('mysql');

const con = mysql.createConnection({
  host: "sql107.epizy.com",
  user: "epiz_33898702",
  password: "6z98ewvPQJD4V5n",
  database: "epiz_33898702_eventmanagemen"
});

module.exports = con;