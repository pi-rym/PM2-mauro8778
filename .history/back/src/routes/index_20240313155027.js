const {Router} = require("express");

const movies = require("./movies");

movies.use("/movies",movies);

module.exports= router;