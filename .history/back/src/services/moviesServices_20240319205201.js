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

    crearMovie: async(Movies)=>{

        try{

            const movie = await Movie.create(dateMovies);
            return movie;
        }
        catch(error){

            throw new Error(error);
        }
    }
};