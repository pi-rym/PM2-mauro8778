const {Router} = require("express");

const movies = require("./movies");

movies.use("/movies", getMovies);

module.exports= movies;