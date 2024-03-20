const axios= require("axios");
const Movie = require("../models/Movies");



let movies = []
id= 1;

   const getAllMovies = async() => {

        try {
            const movies = await Movie.find();
            
    return movies;
    
    }
       
     catch(error){
            throw new error(error);
        }
        
    }

   const crearMovie = async ({title,poster,genre,rate,director,duration})=>{

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


module.exports= {

    getAllMovies
}