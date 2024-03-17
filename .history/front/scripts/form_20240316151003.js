const renderCards = require("./renderCards");

document.querySelector('form').addEventListener('submit', renderCards);

var foto = document.getElementById("formulario");


foto.addEventListener("submit", function() {
    foto.remove();
});