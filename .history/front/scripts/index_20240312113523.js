
const renderCards = require ("./renderCards");

const axios = require("axios");


const getfilms = async ()=>{

    const {data} = await axios.get("https://students-api.up.railway.app/movies");
    try{
    data.forEach(renderCards);
    
    }catch(err){
    
    }
    
};

module.exports(getfilms)