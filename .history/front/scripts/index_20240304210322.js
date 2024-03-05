
function crearTarjeta(pelicula) {
    return `
       <div class="tarjeta">
         <img src="${pelicula.poster}" alt="${pelicula.title}">
         <div class="detalles">
           <h2>${pelicula.title}</h2>
           <p>${pelicula.year}</p>
           <p>${pelicula.director}</p>
           <p>${pelicula.duration}</p>
           <p>${pelicula.genre.join(', ')}</p>
           <p>${pelicula.rate} / 10</p>
         </div>
       </div>
    `;
   }
   const tarjetasHTML = tempData.map(crearTarjeta).join('');
   document.getElementById('CardsContenier').innerHTML = tarjetasHTML;