const enviarFormulario = require("./enviarFormulario");
const getFilms = require("./handler");
const limpiarFormulario = require("./LimpiarFormulario");

document.addEventListener("DOMContentLoaded", () => {
    getFilms();

    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", function(event) {
        event.preventDefault(); 
        enviarFormulario(); 
    });
});