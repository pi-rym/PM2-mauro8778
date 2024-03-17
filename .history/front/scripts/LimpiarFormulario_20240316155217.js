function limpiarFormulario(){

document.querySelectorAll('input').forEach(input => input.value='');

}
document.getElementById('formulario').addEventListener('Submit', function(event){


    event.preventDefault();


const titulo = document.getElementById('title').value.trim();
const año = document.getElementById('year').value.trim();
const director = document.getElementById('director').value.trim();
const duracion = document.getElementById('duration').value.trim();
const puntuacion = document.getElementById('rate').value.trim();
const imagen = document.getElementById('poster').value.trim();
const genero = document.getElementById('genre').value.trim();

if(!titulo||!año||!director||!duracion||!puntuacion||!imagen||!genero){
    alert("Por favor completa los datos")
}
});