const moviesServices = require("../services/moviesServices")
module.exports={

 moviesAllController: async ( req , res ) => {
try{
    const movies = await moviesServices.getServices();

    res.status(200).json(movies);

}
catch(error){

    res.status(500).json({

        error:"error interno del servidor"
    })
}
        
    },

createMovies: async(req, res)=>{
    
    const {name} = req.body;
try{

    await moviesServices.createMovies(name);

    res.status(201).json({
        message : "usuario creado",
    });
}
    catch(error){
        res.status(500).json({

            error:" error al crear usuario",
        })


    }
        
    },
};