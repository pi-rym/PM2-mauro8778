const axios= require("axios");
const Movie = require("../models/Movies");



module.exports={

    getAllMovies : async ()=>{

        try {
            const movies = await Movie.find();
            console.log(Movie)
    return movies;
    
    }
       
     catch(error){
            throw new error(error);
        }
        
    },

   
};