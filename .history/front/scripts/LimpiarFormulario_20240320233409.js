

function limpiarFormulario(event) {
    event.preventDefault();
    const inputs= document.querySelectorAll('input');

inputs.forEach(input=>{

if(input.type ==='checkbox'){

    input.checked = false;
}
else{

    input.value = '';
};


})
}
document.getElementById('limpiar-formulario').addEventListener('click', limpiarFormulario);

module.exports = limpiarFormulario;




