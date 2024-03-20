const {Router} = require("express");

const movies = require ("../controllers/movies");
const crearMovies= require("../controllers/crearMovie")
const getMovies = Router();

getMovies.get ("/",movies);
getMovies.post("/",movies.crearMovie);

module.exports = getMovies;