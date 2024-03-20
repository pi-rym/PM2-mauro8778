
const movie = require("../models/Movies");
const moviesServices = require("../services/moviesServices");

const crearMovie = async(req,res)=>{

    try {
        const datosPelicula = req.body;
        const peliculaCreada = await moviesServices.crearMovie(datosPelicula);
        res.status(201).json({ message: "Película creada exitosamente", pelicula: peliculaCreada });
    } catch (error) {
        console.error("Error al crear película en el controlador:", error);
        res.status(500).json({ error: "Error al crear película en el servidor" });
    }
};
 module.exports =
    crearMovie;