function crearTarjeta(movie) {
    return `
      <div class="CardsContenier">
        <h2>${movie.title} (${movie.year})</h2>
         <img src="${movie.poster}" alt="${movie.title}">
      </div>
    `;
  }
  const contenedor = document.getElementById("CardsContenier");
  contenedor.innerHTML = tempData.map(movie => crearTarjeta(movie)).join('');







console.log(tempData);
