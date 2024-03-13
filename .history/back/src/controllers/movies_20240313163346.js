const moviesServices= require("../services/moviesServices")
module.exports={

    moviesController:(req,res)=>{

        const movies= moviesController();

        res.status(200).json(movies);
    }
};