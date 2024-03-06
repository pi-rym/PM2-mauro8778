$.get("https://students-api.2.us-1.fl0.io/movies",(data)=>{



 renderCards(data);

}
);

const renderCards = (data) =>{
data.map((card)=>{
    const cards = `
    <div class="contenedor">
                
                  <div class="card" style="background-image: url('${card.poster}');" >
                    <h3 class="titulo"><a class="link" href="">${card.title}</a><h3>
                    <p>Año:${card.year}</p>
                    <p>Director:${card.director}</p>
                    <p>Duracion:${card.duration}</p>
                    <p>Puntuación:${card.rate}</p>
                </div>
      </div> 
        ` 
document.getElementById("CardsContenier").innerHTML+=cards;
   });
  }
   console.log(data);