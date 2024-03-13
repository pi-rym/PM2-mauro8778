const {Router} = require("express");

const getMovies = require("./movies");

movies.use("/movies", getMovies);

module.exports= movies;