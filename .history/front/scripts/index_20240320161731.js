const enviarFormulario = require("./enviarFormulario");
const getFilms = require("./handler");
const limpiarFormulario = require("./LimpiarFormulario");

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", async function(event) {
        event.preventDefault(); 
        await enviarFormulario(event); 
    });
});