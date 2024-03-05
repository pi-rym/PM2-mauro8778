function crearTarjeta(tempData) {
    return `
       <div class="tarjeta">
         <img src="${tempData.poster}" alt="${tempData.title}">
         <div class="detalles">
           <h2>${tempData.title}</h2>
           <p>${tempData.year}</p>
           <p>${tempData.director}</p>
         </div>
       </div>
    `;
   }
   
   // Usar map para generar el HTML de todas las tarjetas
   const tarjetasHTML = tempData.map(crearTarjeta).join('');
   
   // Insertar el HTML generado en el contenedor
   document.getElementById('CardsContenier').innerHTML = tarjetasHTML;




console.log(tempData);
