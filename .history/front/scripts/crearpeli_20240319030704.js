document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formulario');

    form.addEventListener('submit', async function (event) {
        event.preventDefault(); 
        await sendData();
    });
});

async function sendData() {
    const formData = {
        title: document.getElementById('title').value,
        director: document.getElementById('director').value,
        duration: document.getElementById('duration').value,
        year: document.getElementById('year').value,
        rate: document.getElementById('rate').value,
        genre: document.getElementById('genre').value,
        poster: document.getElementById('poster').value
    };

    try {
        const response = await axios.post('http://localhost:3000/movies', formData);

        if (response.status === 201) {
            console.log('Película creada exitosamente:', response.data);
            clearFields();
        } else {
            console.error('Error al crear la película:', response.statusText);
        }
    } catch (error) {
        console.error('Error al enviar los datos:', error);
    }
}

function clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('director').value = '';
    document.getElementById('duration').value = '';
    document.getElementById('year').value = '';
    document.getElementById('rate').value = '';
    document.getElementById('genre').value = '';
    document.getElementById('poster').value = '';
}