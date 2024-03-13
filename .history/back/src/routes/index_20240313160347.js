const {Router} = require("express");

const getmovies = require("./getMovies");

const router = Router();

movies.use("/movies", getMovies);

module.exports= movies;