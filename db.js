const { Client } = require("pg");
const { DB_URI } = require("./config");
// Determine the database URI based on the environment
const client = new Client(DB_URI);

// Set up the database client
client.connect()
  .then(() => {
    console.log(`Connected sucessfully to ${DB_URI}`);
  })
  .catch((err) => {
    console.error("Database connection error:", err.stack);
    process.exit(1);
  });

module.exports = client;