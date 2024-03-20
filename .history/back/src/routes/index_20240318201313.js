const {Router} = require("express");

const getMovies = require("./getMovies");

const router = Router();

router.use("/movies",getMovies);


module.exports = router;