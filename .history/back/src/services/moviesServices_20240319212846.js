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

    postMovieServices = async(Movie)=>{

        try{

            const newMovie= await Movie.create(Movie)
       return newMovie;
       
       
        }

        catch(error){

            throw error("error al crear el producto")
        }
    }
};