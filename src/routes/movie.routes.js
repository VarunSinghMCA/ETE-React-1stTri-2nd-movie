import express from 'express';
import { getAllMovies, createMovie, updateMovie, deleteMovie } from '../controllers/movie.controller.js';

const movieRouter = express.Router();

movieRouter.get('/', getAllMovies);
movieRouter.post('/', createMovie);
movieRouter.put('/:id', updateMovie);
movieRouter.delete('/:id', deleteMovie);

export default movieRouter;
