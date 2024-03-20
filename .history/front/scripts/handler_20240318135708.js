const renderCards = require ("./renderCards");

const axios = require("axios");


const getFilms = async ()=>{

    try {
        const response = await axios.post('http://localhost:3000/movies');
        renderCards(response.data);
    }catch(error){
    console.log('error')
    }
    
};
document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    getFilms(data);
});

module.exports = getFilms;