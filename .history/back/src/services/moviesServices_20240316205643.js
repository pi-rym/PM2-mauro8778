const axios= require("axios");
const conDb = require("../config/condb");
const Movies = require("../models/Movies");



module.exports={

    getAllMovies : async ()=>{

        try {
            const {data} = await axios.get(
    Movies();
    );
    return data;
    }
       
     catch(error){
            throw new error(error);
        }
        
    },
};