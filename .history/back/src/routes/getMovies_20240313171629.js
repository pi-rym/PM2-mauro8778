const {Router} = require("express");

const {moviesController}= require("../controllers/movies");

const getMovies = Router();

getMovies.get("/", moviesServices.moviesController);

module.exports = getMovies;