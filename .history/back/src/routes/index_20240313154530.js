const {Router}=require("express");

const movies = Router("../routes/movies.js");

router.use("/movies",movies);

module.exports= router;