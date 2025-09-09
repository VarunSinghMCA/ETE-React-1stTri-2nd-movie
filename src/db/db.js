import mysql from "mysql2";
import { database, db_host, db_user, db_password } from "../constant.js";

import dotenv from "dotenv";
dotenv.config();

const db = mysql.createConnection({
  host: db_host,
  user: db_user,     
  password: db_password,       
  database: database
});

db.connect(err => {
  if (err) throw err;
  console.log("✅ Connected to MySQL database!");
});

export default db;



// CREATE DATABASE movies_db;

// USE movies_db;

// CREATE TABLE movies (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     title VARCHAR(255) NOT NULL,
//     director VARCHAR(255),
//     genre VARCHAR(100),
//     release_year INT,
//     rating DECIMAL(2,1) -- e.g. 8.5
// );

