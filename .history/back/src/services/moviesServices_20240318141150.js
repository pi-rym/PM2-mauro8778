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

    crearMovie: async({title,poster,genre,rate,director,duration})=>{

        const newpeli={

            title,
            director,
            duration,
            year,
            poster,
            rate,
            genre

        }
        id++,

        movies.push(newpeli)
    }




    }