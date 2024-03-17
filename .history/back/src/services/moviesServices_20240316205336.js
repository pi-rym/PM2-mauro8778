const axios= require("axios");
const conDb = require("../config/condb");



module.exports={

    getAllMovies : async ()=>{

        try {
            const {data} = await axios.get(
    conDb()
    );
    return data;
    }
       
     catch(error){
            throw new error(error);
        }
        
    },
};