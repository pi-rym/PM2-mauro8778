
tempData.map((card)=>{
    const cards = `
    <div class="contenedor">
                
    
                    <h3 class="titulo">${card.title}<h3>
                     <img  src="${card.poster}"<a href=""></a> class="img" > 
                    
    
    </div>   ` 
document.getElementById("CardsContenier").innerHTML+=cards;
   });

   console.log(tempData);