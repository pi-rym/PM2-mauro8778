const renderCards = (data) =>{
    data.map((card)=>{
        const cards = `
        <div class="contenedor">
                    
                      <div class="card" >
                        <h3 class="titulo"><a class="link" href="">${card.title}</a></h3>
                        <p>Año:${card.year}</p>
                        <p>Director:${card.director}</p>
                        <p>Duracion:${card.duration}</p>
                        <p>Puntuación:${card.rate}</p>
                        <p>Genero: ${card.genre}</p>
                        <img  src="${card.poster}" class="img"><a href=""></a> > 
                    </div>
          </div> 
            ` 
    document.getElementById("CardsContenier").innerHTML+=cards;
       });
      }
    
       module.exports = renderCards;