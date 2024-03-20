const { json } = require("stream/consumers");
const renderCards = require ("./renderCards");

const axios = require("axios");


const getFilms = async ()=>{

    try {
        const response = await axios.get('http://localhost:3000/movies');

        renderCards(response.data);
    }catch(error){
    console.log('error');
    }
    
};

module.exports = getFilms;


 