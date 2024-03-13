const {Router} = require("express")

const {moviesController}= require("../controllers")
const getMovies = Router();

getMovies.get("/", moviesController );

module.exports = getMovies;