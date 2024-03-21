function validarMovies(req,res,next){

    const{title,duration,director,rate,genre,year,poster}=req.body;

if(!title||!duration||!director||!rate||!year||!genre||!poster){

    return res.status(400).json({error:'porfavor completar los datos'});
}
next();
}

module.exports =  validarMovies ;