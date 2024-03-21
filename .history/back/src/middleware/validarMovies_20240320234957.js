


function validarMovies(req,res,next){

    const{title,duration,director,rate,genre,year,poster}=req.body;

if(!title||!duration||!director||!rate||!year||!genre||!poster){

    return res.status(400).json({error:'porfavor completar los datos'});
}

if(isNaN(year)||year.length !==4 ){

    return res.status(400).json({error:'el año debe ser de 4 digitos'});
}
}
