/*const moviesController=(req,res)=>{

    res.status(200).send("proximamente estara disponibles los datos de las peliculas")
}
*/
module.exports={

    moviesController:(req,res)=>{

        const movies= moviesController();
        res.status(200).json(movies);
    }
};