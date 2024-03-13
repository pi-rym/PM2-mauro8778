const moviesServices= require("../services/moviesServices")
module.exports={




    moviesALLController: async (req,res)=>{

        const movies= await moviesController();

        res.status(200).json(movies);
    },
};