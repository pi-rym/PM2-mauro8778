const {Router} = require("express");

const movies = require ("../controllers/movies");
const createMovies= require("../controllers/createMovies")


const getMovies = Router();

getMovies.get ("/",movies);
getMovies.post("/",createMovies)

module.exports = getMovies;