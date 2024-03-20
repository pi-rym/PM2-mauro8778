const renderCards = require ("./renderCards");

const axios = require("axios");


const getFilms = async ()=>{

    try {
        const response = await axios.get('http://localhost:3000/movies');
        renderCards(response.data);
    }catch(error){
    console.log('error')
    }
    
};
document.getElementById("formulario").addEventListener("submit", async function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await axios.post("http://localhost:3000/movies", data);
        console.log("Película creada:", response.data);
        limpiarFormulario();
    } catch (error) {
        console.error("Error al crear película:", error);
        alert("Error al crear película. Por favor intenta nuevamente.");
    }
});

module.exports = getFilms;