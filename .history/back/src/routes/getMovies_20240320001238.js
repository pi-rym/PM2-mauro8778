const {Router} = require("express");

const movies = require ("../controllers/movies");
const postMovie = require("../controllers/postMovie");
const getMovies = Router();

getMovies.get ("/",movies.);
getMovies.post("/",movies.postMovie)

module.exports = getMovies;