const {Router} = require("express")

const {moviesController}= require("../controllers")
const movies = Router();

movies.get("/", moviesController );

module.exports = movies;