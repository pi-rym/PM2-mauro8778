const axios= require("axios");
const Movie = require("../models/Movies");



module.exports={

    getAllMovies : async ()=>{
        console.log(Movie)
        try {
            const movies = await Movie.find();
            
    return movies;
    
    }
       
     catch(error){
            throw new error(error);
        }
        
    },

   
};