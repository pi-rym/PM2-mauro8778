const axios = require('axios');

async function enviarFormulario(event) {
    event.preventDefault();
    const checkboxes = document.getElementsByName('genre');
    const genres = [];
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            genres.push(checkbox.value);
        }
    });
    
    
    const movieData = {
        title: document.getElementById('title').value,
        director: document.getElementById('director').value,
        duration: document.getElementById('duration').value,
        year: document.getElementById('year').value,
        rate: document.getElementById('rate').value,
        genre: genres,
        poster: document.getElementById('poster').value
    };

    try {
        const response = await axios.post('http://localhost:3000/movies', movieData);
        if (response.status === 201) {
            alert('Película creada exitosamente:', response.data);
        } else {
            alert('Error al crear la película:', response.statusText);
        }
    } catch (error) {
        console.error('Error al enviar los datos:', error);
    }
}

module.exports = enviarFormulario;