tempData.map((card)=>{
    const cards = `
    <div class="contenedor">
                    <div>
                    <h3 class="titulo">${card.title}<h3>
                    <img src="${card.poster}" clas="img">
                    
                    </div> 
    
    </div>   ` 
document.getElementById("CardsContenier").innerHTML+=cards;
});

console.log(tempData);