
function  enviarFormulario (){

        title= document.getElementById('title').value,
        director= document.getElementById('director').value,
        duration= document.getElementById('duration').value,
        year= document.getElementById('year').value,
        rate= document.getElementById('rate').value,
        genre= document.getElementById('genre').value.split(" "),
        poster= document.getElementById('poster').value
    }
    
module.exports= enviarFormulario;