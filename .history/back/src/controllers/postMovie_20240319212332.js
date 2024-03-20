const postMovie = async(req,res)=>{

try{
    await postMovie(req.body)
    res.status(201).json({message :"movie creada"})
}
catch(error){

    res.status(400).json({error:error.message})
}

}
module.exports = postMovie;