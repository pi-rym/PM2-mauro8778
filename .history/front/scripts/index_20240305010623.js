
tempData.map((card)=>{
    const cards = `
    <div class="contenedor">
                  <div class="CARD">
                     <img src="${card.poster}" clas="img">
                    <h3 class="titulo">${card.title}<h3>
    </div>
    </div>   ` 
document.getElementById("CardsContenier").innerHTML+=cards;
   });

   console.log(tempData);