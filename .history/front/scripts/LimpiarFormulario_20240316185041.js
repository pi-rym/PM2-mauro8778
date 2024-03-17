

function limpiarFormulario() {
    document.querySelectorAll('input').forEach(input => input.value = ' ');
}
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

        this.submit();
    }
    if(año.length === 4){
        this.submit();
    }
    else{
        error("completar bien los campos")
    }
}
document.querySelector('form').addEventListener('submit', validar);