const {Router} = require("express");

const movies = require("./getMovies");

movies.use("/movies", getMovies);

module.exports= movies;