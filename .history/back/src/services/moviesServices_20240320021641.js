const axios= require("axios");
const Movie = require("../models/Movies");



module.exports={

    getAllMovies : async ()=>{

        try {
            const movies = await Movie.find();
            
    return movies;
    
    }
       
     catch(error){
            throw error;
        }
        
    },

    postMovieServices : async (movie)=>{

        try{

            const newMovie = await Movie.create(movie)
            
       return newMovie;
        }

        catch(error){
            onsole.error("Error al crear la película en la base de datos:", error);
            throw error("error al crear el producto");
        }
    }
};