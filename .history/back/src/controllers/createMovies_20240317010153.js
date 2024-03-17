const moviesServices = require("../services/moviesServices");

createMovies = async(res, req)=>{
const{title,duration,director,year,genre,poster,rate}=req.body;
try{
    const newMovie = await moviesServices.createMovies(title,duration,director,year,genre,poster,rate);
    res.status(201).json({menssage:"Pelicula creada exitosamente",movie:newMovie});
}
catch(error){
    res.status(500).json({message:"Erro al crear la pelicula",error:error.message});
}


}