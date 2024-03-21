const enviarFormulario = require("./enviarFormulario");
const getFilms=require("./handler")


document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("submit", async function(event) {
        await enviarFormulario(); 
    });
});
