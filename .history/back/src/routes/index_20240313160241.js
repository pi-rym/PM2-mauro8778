const {Router} = require("express");

const getmovies = require("./getMovies");

movies.use("/movies", getMovies);

module.exports= movies;