const axios= require("axios");
const Movie = require("../models/Movies");



module.exports={

    getAllMovies : async ()=>{

        try {
            const movies = await Movie.find();
            
    return movies;
    
    }
       
     catch(error){
            throw new error(error);
        }
        
    },

    crearMovie: async(dateMovies)=>{

        try{

            const movies= new Movie(dateMovies);
            const guardarmovies= await movies.save();
            return guardarmovies;
        }
        catch(error){

            throw new Error(error);
        }
    }
};