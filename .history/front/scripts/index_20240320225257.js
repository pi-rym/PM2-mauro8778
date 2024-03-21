
const enviarFormulario = require("./enviarFormulario");
const getFilms=require("./handler")

getFilms();

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", async function(event) {
        
        validar(event);
        event.preventDefault();
        await enviarFormulario(event); 
        
    });


});
