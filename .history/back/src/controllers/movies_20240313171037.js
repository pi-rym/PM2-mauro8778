const moviesServices = require("../services/moviesServices")
module.exports={




    moviesAllController: async (req,res)=>{

        const movies= await moviesServices.moviesController();

        res.status(200).json(movies);
    },
};