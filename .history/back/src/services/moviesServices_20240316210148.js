const axios= require("axios");
const Movies = require("../models/Movies");



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