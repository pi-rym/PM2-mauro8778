
/*function crearTarjeta(pelicula) {
    return `
       <div class="tarjeta">
         <img src="${pelicula.poster}" alt="${pelicula.title}">
         <div class="detalles">
           <h2>${pelicula.title}</h2>
         </div>
       </div>
    `;
   }
   const tarjetas = tempData.map(crearTarjeta).join('');
   document.getElementById('CardsContenier').innerHTML = tarjetas;*/

   tempData.map((card)=>{

    const tarjeta=card.genero
    const cards = `
    <div class="contenedor">
                    <div> <img src="${card.poster}" clas="img">
                    <h3 class="titulo">${card.title}<h3>
                    </div> 
    
                    </div>   ` 
document.getElementById("CardsContenier").innerHTML+=cards;
   });

   console.log(tempData);