
const Genres= ['drama','Action','Fantasy','Comedy','Terror','Romance','Sci-Fi','Adventure']
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


    function renderGenres(){
        
        genre.innerHTML=''
    for(const genre of genres)

        const input =document.createElement('input')
        const label = document.createElement('label')
        input.type ="checkbox"
        input.id = genre
        input.name = "genre[]"
        input.value = genre

        label.htmlFor =genre
        label.textContent=genre

        genre.appendchild(input)
        genre.appendchild(label)
return genre;
}
    if(titulo ===''||director ===''||duracion ===''|| año ===''|| genero ===''||puntuacion===''||imagen===''){

        alert("porfavor completar los campos");
        return;
    }
    else{

        this.submit();
    }
    
}
document.querySelector('form').addEventListener('submit', validar);

module.exports = limpiarFormulario;