const {Router}=require("express");

const movies = require("./movies");

router.use("/movies",movies);

module.exports= router;