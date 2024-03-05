function crearTarjeta(tempData) {
    return `
       <div class="tarjeta">
         <img src="${pelicula.poster}" alt="${pelicula.title}">
         <div class="detalles">
           <h2>${pelicula.title}</h2>
           <p>${pelicula.year}</p>
           <p>${pelicula.director}</p>
         </div>
       </div>
    `;
   }
   
   // Usar map para generar el HTML de todas las tarjetas
   const tarjetasHTML = tempData.map(crearTarjeta).join('');
   
   // Insertar el HTML generado en el contenedor
   document.getElementById('tarjetas-container').innerHTML = tarjetasHTML;




console.log(tempData);
