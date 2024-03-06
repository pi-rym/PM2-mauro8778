
tempData.map((card)=>{
    const cards = `
    <div class="contenedor">
    
    <div class="card">
    <h3 class="titulo"><a class="link" href="">${card.title}</a><h3>
    <p>Año:${card.year}</p><p>Director:${card.director}</p><p>Duracion:${card.duration}</p><p>Puntuación:${card.rate}</p>
    <img  src="${card.poster}" class="img"<a href=""></a> > 
                    
                    <div class="foto" >
                    <img  src="${card.poster}" class="img"<a href=""></a> > 
    
    
    </dir>
    
    

                     </div>
    
    </div>   ` 
document.getElementById("CardsContenier").innerHTML+=cards;
   });

   console.log(tempData);

 /* const peli = document.getElementById('CardsContenier');

   function renderFilm(movie){

    const movieElement = document.createElement('div');
    const containerMovie = document.createElement('div');
    movieElement.classList.add('contenedor');
    containerMovie.classlist.add('card');

    containerMovie.innerHTML = `
    <img  src="${movie.poster}" class="img" >
    <h3 class="titulo"><a class="link" href="">${movie.title}</a>(${movie.year})</3>
    <p><strong>director</strong>${movie.director}</p>
    <p><strong>duracion:</strong>${movie.duration}</p>
    <p><strong>Genero</strong>${movie.genre.join(',')}</p>
    <p><strong>Rate</strong>${movie.rate}</p>
    `
    peli.appendChild(movieElement)
    movieElement.appendChild(containerMovie)

   }

   tempData.forEach(renderFilm);*/