const {Router} = require("express");

const {moviesController}= require("../controllers/movies");

const getMovies = Router();

getMovies.get("/", moviesController);

module.exports = getMovies;