const moviesServices = require("../services/moviesServices");
const movie = require("../models/Movies");

const moviesController = async (req, res)=>{

   try{
    const response= await moviesServices.getAllMovies();
    res.status(200).json(response);
   }
catch(error){

res.status(500).send(error.message);

}


};
crearMovie = async(res,req)=>{

   const{title,year,director,duration,rate,poster,genre}= req.body;

    const movie = {title,year,director,duration,rate,poster,genre}
    
    try{
        const newMovie = await moviesServices.createMovie(movie);
        res.status(200).jason(newMovie);
    }

    catch(error){

        
    }
};






module.exports = {
   
   moviesController,
   crearMovie

}