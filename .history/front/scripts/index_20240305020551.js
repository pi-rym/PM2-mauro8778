
tempData.map((card)=>{
    const cards = `
    <div class="contenedor">
                
                    <div class="card" a href="">
                    <h3 class="titulo">${card.title}<h3>
                     <img  src="${card.poster}" class="img"<a href=""></a> > 
                     </div>
    
    </div>   ` 
document.getElementById("CardsContenier").innerHTML+=cards;
   });

   console.log(tempData);