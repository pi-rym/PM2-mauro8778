
const axios = require("axios");
const renderCards = require("./renderCards");
const getfilms = async ()=>{

    const {data} = await axios.get("https://students-api.up.railway.app/movies");
    try{
    data.forEach(renderCards);
    
    }catch(err){
    
    }
    
};

module.exports(renderCards)