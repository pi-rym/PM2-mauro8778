const {Router} = require("express");

const moviesServices = require("../services/moviesServices");

const getMovies = Router();

getMovies.get("/", moviesServices.moviesCotrollers);

module.exports = getMovies;