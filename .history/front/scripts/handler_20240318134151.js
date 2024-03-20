const renderCards = require ("./renderCards");

const axios = require("axios");

const crearPelicula = async (data) => {
    try {
        await axios.post('http://localhost:3000/movies', data);
        getFilms(); // Llamar a la función para actualizar las películas después de crear una nueva
    } catch (error) {
        console.error('Error al crear película:', error);
    }
};

document.getElementById('formulario').addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });
    crearPelicula(data);
});

const getFilms = async ()=>{

    try {
        const response = await axios.get('http://localhost:3000/movies');
        renderCards(response.data);
    }catch(error){
    console.log('error')
    }
    
};

module.exports = getFilms;