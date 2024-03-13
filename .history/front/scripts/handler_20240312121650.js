const renderCards = require ("./renderCards");

const axios = require("axios");


const getFilms = async ()=>{

    try {
        const response = await axios.get('https://students-api.up.railway.app/movies');
        renderCards(response.data);
    }catch(error){
    console.log('error')
    }
    
};

module.exports = getFilms;