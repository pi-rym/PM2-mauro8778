    const peli = document.getElementById('CardsContenier');

   function renderFilm(movie){

    const movieElement = document.createElement('div');
    const containerMovie = document.createElement('div');
    movieElement.classList.add('contenedor');
    containerMovie.classlist.add('card');

    containerMovie.innerHTML = `
    <img  src="${movie.poster}" class="img"<a href=""></a> >
    <h3 class="titulo"><a class="link" href="">${movie.title}</a>(${movie.year})</3>
    <p><strong>director</strong>${movie.director}</p>
    <p><strong>duracion:</strong>${movie.duration}</p>
    <p><strong>Genero</strong>${movie.genre.join(',')}</p>
    <p><strong>Rate</strong>${movie.rate}</p>
    `
    peli.appendChild(movieElement)
    movieElement.appendChild(containerMovie)

   }

   tempData.forEach(renderFilm);