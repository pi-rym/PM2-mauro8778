const {Router} = require("express");

const movies = require("../controllers/movies");

const getMovies = Router();

getMovies.get("/", movies.moviesAllController);

movies.post("/",movies.createMovies);

module.exports = getMovies;