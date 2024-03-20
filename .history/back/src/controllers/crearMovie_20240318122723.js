
const movie= require("../models/Movies")

crearMovie = async(res,req)=>{

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
          const movieguardada = await new newMovie.save();
          res.status(200).json(response);
    }
    catch(error){
 
       res.status(500).json({error: "Error al crear la pelicula"})
    }
 }
 module.exports =
    crearMovie;