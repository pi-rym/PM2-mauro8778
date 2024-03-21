function validarMovies(req,res,next){

    const{title,duration,director,rate,genre,year,poster}=req.body;

if(!title||!duration||!director||!rate||!year||!genre||!poster){

    return res.status(400).json({error:'porfavor completar los datos'});
}
const existingMovie = Pelicula.findOne({ title });

if (existingMovie) {
    return res.status(400).json({ error: 'Título de película duplicado. Por favor, elija un título diferente.' });
}

next();
}

module.exports =  validarMovies ;