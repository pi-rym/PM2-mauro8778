const {Router} = require("express");

const getmovies = require("./getMovies");

const router = Router();

router.use("/movies",getmovies);


module.exports = router;