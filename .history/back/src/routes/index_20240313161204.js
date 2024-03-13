const {Router} = require("express");

const getmovies = require("./movies");

const router = Router();

router.use("/movies", getMovies);

module.exports= movies;