const axios= require("axios");
const Movie = require("../models");



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
   
   
};