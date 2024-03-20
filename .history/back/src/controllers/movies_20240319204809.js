const moviesServices = require("../services/moviesServices");



const moviesController = async (req, res)=>{

   try{
    const response= await moviesServices.getAllMovies();
    res.status(200).json(response);
   }
catch(error){

res.status(500).send("ah ocurrido un error");

}
};
const crearMovie = async(req,res)=>{

   const nuevaPelicula = new Movie(req.body);
    try {
        await nuevaPelicula.save();
        res.status(201).json(nuevaPelicula);
    } catch (error) {
        console.error('Error al crear la película:', error);
        res.status(500).send('Error al crear la película');
    }
};async function obtenerPeliculas(req, res) {
   try {
       const peliculas = await Movie.find();
       res.json(peliculas);
   } catch (error) {
       console.error('Error al obtener las películas:', error);
       res.status(500).send('Error al obtener las películas');
   }
}


   


module.exports = 
{
      moviesController,
      crearMovie,
      obtenerPeliculas
}
