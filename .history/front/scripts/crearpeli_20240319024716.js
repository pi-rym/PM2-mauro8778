



document.getElementById("formulario").addEventListener('submit', async function(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const director = document.getElementById("director").value;
    const duration = document.getElementById("duration").value;
    const year = document.getElementById("year").value;
    const rate = document.getElementById("rate").value;
    const genre = document.getElementById("genre").value;
    const poster = document.getElementById("poster").value;

  
    const movieData = {
        title: title,
        director: director,
        duration: duration,
        year: year,
        rate: rate,
        genre: genre,
        poster: poster
    };

    try {
        
        const response = await axios.post('http://localhost:3000/movies', movieData);
        
        console.log("Película creada:", response.data);
    } catch (error) {
        console.error("Error al crear película:", error);
    }
});