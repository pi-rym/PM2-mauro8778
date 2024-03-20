const axios = require('axios');

async function enviarFormulario() {
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
        genre: document.getElementById('genre').value.split(',').map(item => item.trim()),
        poster: document.getElementById('poster').value
    };

    try {
        const response = await axios.post('http://localhost:3000/movies', movieData);
        if (response.status === 201) {
            console.log('Película creada exitosamente:', response.data);
        } else {
            console.error('Error al crear la película:', response.statusText);
        }
    } catch (error) {
        console.error('Error al enviar los datos:', error);
    }
}

module.exports = enviarFormulario;