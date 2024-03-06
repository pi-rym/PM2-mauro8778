    const peli = document.getElementById("CardsContenier");

   function renderfilm(movie){

    const movieElement = documento.createElement("div");
    const containermovie=document.createElement("div");
    movieElement.classList.add("contenedor");
    containermovie.classlist.add("card");

    containermovie.innerHTML = `
    <img  src="${movie.poster}" class="img"<a href=""></a> >
    <h3 class="titulo"><a class="link" href="">${movie.title}</a>(${movie.year})</3>
    <p><strong>director</strong>${movie.director}</p>
    <p><strong>duracion:</strong>${movie.duration}</p>
    <p><strong>Genero</strong>${movie.genre,join(',')}</p>
    <p><strong>Rate</strong>${movie.rate}</p>
    `
    peli.appenchild(movieElement)
    movieElement.appendchild(containermovie)

   };

   tempData.forEach(renderfilm);