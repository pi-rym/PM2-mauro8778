function limpiarFormulario() {
    document.querySelectorAll('input').forEach(input => input.value = ' ');
}
function validar(event){

    event.preventDefault();

    const inputs = document.getElementById('input');
    
    inputs.forEach(input=>{

        if(input.value.trim()===''){

            alert("porfavor completar los datos");
        }
    })
}
document.querySelectorAll('form').addEventListener('submit', validar);