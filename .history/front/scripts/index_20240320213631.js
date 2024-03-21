const enviarFormulario = require("./enviarFormulario");


getFilms();

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", async function(event) {
        event.preventDefault();
        await enviarFormulario(event); 
        
    });


});
