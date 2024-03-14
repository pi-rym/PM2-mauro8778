const {Router} = require("express");

const movies = require("../controllers/movies");

const getMovies = Router();

getMovies.get("/", movies.moviesAllController);

module.exports = getMovies;