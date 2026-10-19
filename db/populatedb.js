#! /usr/bin/env node
require('dotenv').config();
const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  "user" VARCHAR ( 255 ), text TEXT, added TEXT
);

INSERT INTO messages ("user", text, added) 
VALUES
  ('Bryan', 'Hello how is everyone doing', '2026-10-17'),
  ('Odin', 'Hello am doing find Bryan', '2026-10-17'),
  ('Damon', 'Hello Bryan and Odin', '2026-10-17');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: process.env.DB_CONNECT
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
