import db from '../db/db.js';

const getAllMovies = (req, res) => {
  db.query("SELECT * FROM movies", (err, results) => {
    if (err) return res.status(500).send(err);
    res.status(200).json(results);
  });
};

const createMovie = (req, res) => {
  const { title, director, genre, release_year, rating } = req.body;
  const sql = "INSERT INTO movies (title, director, genre, release_year, rating) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [title, director, genre, release_year, rating], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(201).json({ id: result.insertId, ...req.body });
  });
};
const updateMovie = (req, res) => {
  const { id } = req.params;
  const { title, director, genre, release_year, rating } = req.body;
  const sql = "UPDATE movies SET title=?, director=?, genre=?, release_year=?, rating=? WHERE id=?";
  db.query(sql, [title, director, genre, release_year, rating, id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).json({ message: "Movie updated successfully" });
  });
};

const deleteMovie = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM movies WHERE id=?";
  db.query(sql, [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.status(200).json({ message: "Movie deleted successfully" });
  });
};


export { getAllMovies, createMovie, updateMovie, deleteMovie };