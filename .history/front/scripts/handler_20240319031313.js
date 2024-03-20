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
async function enviarDatos(event) {
    event.preventDefault();
    const formData = {
        title: document.getElementById('title').value,
        duration: document.getElementById('duration').value,
        director:document.getElementById('director').value,
        año:document.getElementById('year').value,
        puntuacion:document.getElementById('rate').value,
        imagen:document.getElementById('poster'),
        genero:document.getElementById('genre').value
    };

    try {
        const response = await axios.post('http://localhost:3000/movies', formData);
        console.log('Película creada:', response.data);
        limpiarCampos();
    } catch (error) {
        console.error('Error al crear película:', error);
    }
}

function limpiarCampos() {
    document.getElementById('formulario').reset();
}

document.getElementById('formulario').addEventListener('submit', enviarDatos);









module.exports ={

    getFilms,
    enviarDatos
}

 