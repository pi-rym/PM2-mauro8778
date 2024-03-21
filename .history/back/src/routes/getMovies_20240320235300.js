const {Router} = require("express");

const movies = require ("../controllers/movies");
const validarMovies = require("../middleware/validarMovies")

const getMovies = Router();

getMovies.get ("/",movies.moviesController);
getMovies.post("/",validarMovies,movies.postMovies);

module.exports = getMovies;