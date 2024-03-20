const {Router} = require("express");

const movies = require ("../controllers/movies");
const crearMovie= require("../controllers/crearMovie")
const getMovies = Router();

getMovies.get ("/",movies);
getMovies.post("/",crearMovie.crearMovie);

module.exports = getMovies;