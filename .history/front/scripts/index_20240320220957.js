const limpiarFormulario = require("./LimpiarFormulario");
const enviarFormulario = require("./enviarFormulario");
const getFilms=require("./handler")
limpiarFormulario();
getFilms();

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", async function(event) {
        event.preventDefault();
        await enviarFormulario(event); 
        
    });


});
