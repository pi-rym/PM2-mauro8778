
tempData.map((card)=>{
    const cards = `
    <div class="contenedor">
                
                    <div class="card" >
                    <h3 class="titulo"><a class="link" href="">${card.title}</a><h3>
                    <p>${card.year}</p><p>${card.director}</p><p>${card.duration}</p><p>${card.rate}</p>
                    <img  src="${card.poster}" class="img"<a href=""></a> > 

                     </div>
    
    </div>   ` 
document.getElementById("CardsContenier").innerHTML+=cards;
   });

   console.log(tempData);