const {Router} = require("express");

const getmovies = require("./getMovies");

const router = Router();

router.use("/movies", getMovies);

module.exports= movies;