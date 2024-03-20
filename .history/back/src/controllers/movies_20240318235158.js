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

   const{title,duration,director,year,rate,poster,genre}= req.body;
   
   try{
         const nuevaMovie = await moviesServices.crearMovie({title,duration,director,year,rate,poster,genre})

      res(200).json(nuevaMovie);

   }
   catch(error){

      res.status(500).send("no se creo la pelicula ")
   }
};
   


module.exports = 
{
      moviesController,
      crearMovie
}
