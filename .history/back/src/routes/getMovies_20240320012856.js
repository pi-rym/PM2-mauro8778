const {Router} = require("express");

const movies = require ("../controllers/movies");

const getMovies = Router();

getMovies.get ("/",movies.moviesController);
getMovies.post("/",movies.postMovies);

module.exports = getMovies;