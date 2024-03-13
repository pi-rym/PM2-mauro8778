const {Router}= require("express")
const moviesController= require("../controllers/movies")
const movies = Router();

movies.get("/",moviesController )

module.exports = movies