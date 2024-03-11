$.get("https://students-api.2.us-1.fl0.io/movies",(data)=>{



 renderCards(data);

}
);

const renderCards = (data) =>{
data.map((card)=>{
    const cards = `
    <div class="contenedor">
                
                  <div class="card" >
                    <h3 class="titulo"><a class="link" href="">${card.title}</a><h3>
                    <p>Año:${card.year}</p>
                    <p>Director:${card.director}</p>
                    <p>Duracion:${card.duration}</p>
                    <p>Puntuación:${card.rate}</p>
                    <img  src="${card.poster}" class="img"<a href=""></a> > 
                </div>
      </div> 
        ` 
document.getElementById("CardsContenier").innerHTML+=cards;
   });
  }
   console.log(data);



   function generateMovieCard(title, year, director, duration, poster) {
    return `
      <div class="card movie-card">
        <img src="${poster}" class="card-img-top" alt="${title}">
        <div class="card-body">
          <h5 class="card-title">${title} (${year})</h5>
          <p class="card-text"><strong>Director:</strong> ${director}</p>
          <p class="card-text"><strong>Duración:</strong> ${duration} minutos</p>
        </div>
      </div>
    `;
  }

  // Función para manejar el envío del formulario
  document.getElementById('movieForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    // Obtener los valores del formulario
    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const director = document.getElementById('director').value;
    const duration = document.getElementById('duration').value;
    const poster = document.getElementById('poster').value;

    // Generar la tarjeta de película
    const cardHtml = generateMovieCard(title, year, director, duration, poster);

    // Agregar la tarjeta al contenedor de tarjetas
    document.getElementById('cardContainer').insertAdjacentHTML('beforeend', cardHtml);

    // Limpiar el formulario después de agregar la tarjeta
    document.getElementById('movieForm').reset();
  });