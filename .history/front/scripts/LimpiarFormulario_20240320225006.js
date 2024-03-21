

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


function validar(event){
event.preventDefault();
    

    const tituloinput =document.getElementById("title");
    const directorinput= document.getElementById("director");
    const durationinput= document.getElementById("duration");
    const añoinput= document.getElementById("year");
    const generoinput= document.getElementById("genre");
    const puntuacioninput= document.getElementById("rate");
    const imageninput= document.getElementById("poster");

    const titulo = tituloinput.value;
    const director = directorinput.value;
    const duracion = durationinput.value;
    const año = añoinput.value;
    const genero = generoinput.value;
    const puntuacion = puntuacioninput.value;
    const imagen = imageninput.value;

    

    if(titulo ===''||director ===''||duracion ===''|| año ===''|| genero ===''||puntuacion===''||imagen===''){

        alert("porfavor completar los campos");
        return;
    }
    else{

        event.currentTarget.submit(event);
    }
    
}
module.exports = validar;
document.querySelector('form').addEventListener('submit', validar);



