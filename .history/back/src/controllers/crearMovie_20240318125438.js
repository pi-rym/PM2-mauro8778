
const movie = require("../models/Movies");
const moviesServices = require("../services/moviesServices");

crearMovie = async(res,req)=>{

    const movie = {title,year,director,duration,rate,poster,genre}= re.body
    
    moviesServices.createMovie(movie)
 }
 module.exports =
    crearMovie;