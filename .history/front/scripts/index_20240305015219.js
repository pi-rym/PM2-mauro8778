
tempData.map((card)=>{
    const cards = `
    <div class="contenedor">
                
    
                    <h3 class="titulo"a href="">${card.title}<h3>
                     <img src="${card.poster}" class="img">
                    
    
    </div>   ` 
document.getElementById("CardsContenier").innerHTML+=cards;
   });

   console.log(tempData);