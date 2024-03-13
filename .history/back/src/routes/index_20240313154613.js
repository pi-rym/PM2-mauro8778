const {Router}=require("express");

const movies = require("../routes/movies.js");

router.use("/movies",movies);

module.exports= router;