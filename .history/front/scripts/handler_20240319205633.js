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
async function enviarDatos(event) {
    event.preventDefault();
    const formData = {
        title: document.getElementById('title').value,
        duration: document.getElementById('duration').value,
        director:document.getElementById('director').value,
        year:document.getElementById('year').value,
        rate:document.getElementById('rate').value,
        poster:document.getElementById('poster'),
        genre:document.getElementById('genre').value
    };

   fetch('http://localhost:3000/movies',{

   method: 'post',
   headers:{

    'content-type':'application/json'
   },
   body: JSON.stringify(formData)

   })
   .then(response => response.json())
    .then(data => {
        console.log('Película creada:', data);
        mostrarPeliculas();
        limpiarCampos();
    })
    .catch(error => console.error('Error al enviar los datos:', error));
};


function limpiarCampos() {
    document.getElementById('formulario').reset();
}

document.querySelector('form').addEventListener('submit', enviarDatos);









module.exports ={

    getFilms,
    enviarDatos
}

 