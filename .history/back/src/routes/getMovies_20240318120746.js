const {Router} = require("express");

const movies = require ("../controllers/movies");

const getMovies = Router();

getMovies.get ("/",movies.moviesController);
getMovie.post("/",movies.createMovie);

module.exports = getMovies;