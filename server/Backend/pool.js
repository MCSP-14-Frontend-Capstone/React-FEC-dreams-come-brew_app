const { Pool } = require("pg");
require("dotenv").config();

const connectionString = process.env.DATABASE_URL;

const pool = new Pool({
  connectionString,
});

// const pool = new Pool({
//   user: "abela",
//   password: "812315",
//   host: "localhost",
//   port: 5432,
//   database: "sdc_app"
// });



module.exports = pool;
