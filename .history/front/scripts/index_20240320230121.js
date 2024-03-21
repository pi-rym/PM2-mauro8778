
const enviarFormulario = require("./enviarFormulario");
const getFilms=require("./handler")

getFilms();

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", async function(event) {
        event.preventDefault();
        
        if (validar(event)) {
            await enviarFormulario(event);
        } else {
            console.log('La validación del formulario falló.');
        }
        
    });


});
