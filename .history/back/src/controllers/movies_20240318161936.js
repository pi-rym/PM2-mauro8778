const moviesServices = require("../services/moviesServices");
const movie= require("../models/Movies.js")
const moviesController = async (req, res)=>{

   try{
    const response= await moviesServices.getAllMovies();
    res.status(200).json(response);
   }
catch(error){

res.status(500).send(error.message);

}


};

crearMovie = async(req,res)=>{

   const newMovie = new movie({

    titulo: req.body.title,
    director: req.body.director,
    duracion: req.body.duration,
    años: req.body.year,
    puntuacion: req.body.rate,
    genero: req.body.genre,
    imagen: req.body.poster,
   });
   try{
         const response = await new newMovie.save();
         res.status(200).json(response);
         console.log("se creo el usuario ");
   }
   catch(error){

      res.status(500).json({error: "Error al crear la pelicula"})
      console.log("error ");
   }
}



module.exports = {
   
   crearMovie,
   moviesController}