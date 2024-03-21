renderCards.map( (data) =>{
  const cards =  `
  <div class="contenedor">
      <div class="card">
          <h3 class="titulo"><a class="link" href="">${card.title}</a></h3>
          <p>Año: ${card.year}</p>
          <p>Director: ${card.director}</p>
          <p>Duración: ${card.duration}</p>
          <p>Puntuación: ${card.rate}</p>
          <p>Género: ${card.genre}</p>
          <img src="${card.poster}" class="img">
      </div>
  </div>` 


document.getElementById("CardsContenier").innerHTML += cardsHTML;
});

module.exports = renderCards;