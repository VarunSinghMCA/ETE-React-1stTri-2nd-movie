const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// GET all movies
app.get("/movies", (req, res) => {
  db.query("SELECT * FROM movies", (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

// POST new movie
app.post("/movies", (req, res) => {
  const { title, director, genre, release_year, rating } = req.body;
  const sql = "INSERT INTO movies (title, director, genre, release_year, rating) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [title, director, genre, release_year, rating], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ id: result.insertId, ...req.body });
  });
});

// PUT update movie
app.put("/movies/:id", (req, res) => {
  const { id } = req.params;
  const { title, director, genre, release_year, rating } = req.body;
  const sql = "UPDATE movies SET title=?, director=?, genre=?, release_year=?, rating=? WHERE id=?";
  db.query(sql, [title, director, genre, release_year, rating, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Movie updated successfully" });
  });
});

// DELETE movie
app.delete("/movies/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM movies WHERE id=?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: "Movie deleted successfully" });
  });
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5432");
});
