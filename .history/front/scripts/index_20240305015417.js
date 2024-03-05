
tempData.map((card)=>{
    const cards = `
    <div class="contenedor">
                
    
                    <h3 class="titulo">${card.title}<h3>
                     <img <a href=""></a> src="${card.poster}" class="img" > 
                    
    
    </div>   ` 
document.getElementById("CardsContenier").innerHTML+=cards;
   });

   console.log(tempData);