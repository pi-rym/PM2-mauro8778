
/*const renderCards = (data) =>{
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
    
       module.exports = renderCards;*/

       const filmSection=document.getElementById('CardsContainers')

       function renderCards(data){

        const movieElement=document.createElement('article')
        const containerMovie = document.createElement('div')
         
        movieElement.classList.add("contenedor")
         containerMovie.classList.add('card')

         movieElement.innerHTML= `<img src="${data.poster}" alt="${data.title}">`

         containerMovie.innerHTML=`
         
         <h3>${data.title}(${data.year})</h3>
         <p>Director:${card.director}</p>
         <p>Duracion:${card.duration}</p>
         <p>Puntuación:${card.rate}</p>
         `
         filmSection.appendChild(movieElement)
         movieElement.appendChild(containerMovie)
       }

       module.exports = renderCards;