const enviarFormulario = require("./enviarFormulario");


document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    formulario.addEventListener("click", async function(event) {
        await enviarFormulario(event); 
    });

    const limpiarBtn = document.getElementById("limpiar");
limpiarBtn.addEventListener("click", limpiarFormulario);
});