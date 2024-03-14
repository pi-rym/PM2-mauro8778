const {Router} = require("express");

const movies = require("../controllers/movies");
const validMovies = require("../middlewares/validMovies");

const getMovies = Router();

getMovies.get("/", movies.moviesController);

getMovies.post("/", validMovies,movies.createMovies);

module.exports = getMovies;