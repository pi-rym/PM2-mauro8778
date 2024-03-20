
const movie = require("../models/Movies");
const moviesServices = require("../services/moviesServices");

crearMovie = async(res,req)=>{

    const{title,year,director,duration,rate,poster,genre}= req.body;

    const movie = {title,year,director,duration,rate,poster,genre}
    
    try{
        const newMovie = await moviesServices.createMovie(movie);
        res.status(200).jason(newMovie);
    }

    catch(error){

        res.status(500).json({ error: "Error al crear la película" });
    }
 }
 module.exports =
    crearMovie;