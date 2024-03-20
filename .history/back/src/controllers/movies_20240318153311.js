const moviesServices = require("../services/moviesServices");
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

   try {
       const datosPelicula = req.body;
       const peliculaCreada = await movieService.crearMovie(datosPelicula);
       res.status(201).json({ message: "Película creada exitosamente", pelicula: peliculaCreada });
   } catch (error) {
       console.error("Error al crear película en el controlador:", error);
       res.status(500).json({ error: "Error al crear película en el servidor" });
   }
};






module.exports = {
   
   moviesController,
   crearMovie

}