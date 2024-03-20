const {Router} = require("express");

const movies = require ("../controllers/movies");

const getMovies = Router();

getMovies.get ("/",moviesController);
getMovies.post("/",postMovies)

module.exports = getMovies;