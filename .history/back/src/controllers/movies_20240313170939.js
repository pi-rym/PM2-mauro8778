const moviesAllServices= require("../services/moviesServices")
module.exports={




    moviesAllController: async (req,res)=>{

        const movies= await moviesController();

        res.status(200).json(movies);
    },
};