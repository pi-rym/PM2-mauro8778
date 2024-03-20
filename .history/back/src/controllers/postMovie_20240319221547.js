
const moviesServices = require("../services/moviesServices");
const postMovieServices = require("../services/moviesServices");

const postMovie = async(req,res)=>{
const{title,duration,director,year,genre,rate,poster}= req.body;
try{
    const newMovie=await moviesServices.postMovieServices({title,duration,director,year,genre,rate,poster})
    res.status(201).json({message:"peli creada exitosa"})

}
catch(error){

    res.status(400).json({error:error.message})
}

}
module.exports = postMovie;