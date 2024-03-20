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

const postMovies = async (req, res) => {
  
   try {
      const { title, duration, director, genre, rate, poster, year } = req.body;
      const newMovie = await moviesServices.postMovieServices({ title, duration, director, genre, rate, poster, year });
       res.status(201).json(newMovie);
   } catch (error) {
      res.status(500).send("Ha ocurrido un error al crear una nueva película.");
   }
}


   


module.exports = {
   
   moviesController,
   postMovies

};

