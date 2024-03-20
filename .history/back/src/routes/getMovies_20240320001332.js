const {Router} = require("express");

const movies = require ("../controllers/movies");
const postMovie = require("../controllers/postMovie");
const getMovies = Router();

getMovies.get ("/",movies.moviesController);
getMovies.post("/",movies.postMovies)

module.exports = getMovies;