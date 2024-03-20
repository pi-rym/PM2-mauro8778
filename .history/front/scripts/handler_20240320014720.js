
const enviarFormulario = require("./enviarFormulario");
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
document.addEventListener("DOMContentLoaded", () => {
    getFilms();
});
module.exports = getFilms;


 