const axios = require('axios');

async function enviarFormulario(event) {
    try {

        event.preventDefault();
        const titleInput = document.getElementById('title');
        const directorInput = document.getElementById('director');
        const durationInput = document.getElementById('duration');
        const yearInput = document.getElementById('year');
        const rateInput = document.getElementById('rate');
        const posterInput = document.getElementById('poster');

        
        if (
            !titleInput.value.trim() ||
            !directorInput.value.trim() ||
            !durationInput.value.trim() ||
            !yearInput.value.trim() ||
            !rateInput.value.trim() ||
            !posterInput.value.trim()
        ) {
            
            alert('Por favor complete todos los campos.');
            return;
        }
        const checkboxes = document.getElementsByName('genre');
        let checkedGenres = false;
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                checkedGenres = true;
            }
        });
        if (!checkedGenres) {
            
            alert('Por favor seleccione al menos un género.');
            return;
        }
        
        const genres = [];
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                genres.push(checkbox.value);
            }
       } );
    
    
    
    const movieData = {
        title: document.getElementById('title').value,
        director: document.getElementById('director').value,
        duration: document.getElementById('duration').value,
        year: document.getElementById('year').value,
        rate: document.getElementById('rate').value,
        genre: genres,
        poster: document.getElementById('poster').value
    };

    
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