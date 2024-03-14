const moviesServices = require("../services/moviesServices")
module.exports={

 moviesAllController: async ( req , res ) => {
try{
    const movies= await moviesServices.getServices();

    res.status(200).json(movies);

}
catch(error){

    res.status(500).json({

        error:"error interno del servidor"
    })
}
        
    },
};