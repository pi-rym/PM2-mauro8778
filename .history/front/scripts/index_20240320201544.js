const enviarFormulario = require("./enviarFormulario");


document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", async function(event) {
        await enviarFormulario(); 
    });


