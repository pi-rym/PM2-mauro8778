const moviesServices = require("../services/moviesServices");
const Movie = require("../models/Movies.js")


const moviesController = async (req, res)=>{

   try{
    const response= await moviesServices.getAllMovies();
    res.status(200).json(response);
   }
catch(error){

res.status(500).send("ah ocurrido un error");

}
};


module.exports = moviesController;