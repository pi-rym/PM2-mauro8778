function limpiarFormulario() {
    document.querySelectorAll('input').forEach(input => input.value = '');
}



document.getElementById('formulario').addEventListener('Submit', function(event){


    event.preventDefault();

    const inputs = document.querySelectorAll('input');
    let campoVacio = false;

    inputs.forEach(input=>{
        if(input.value.trim()===''){
            campoVacio = true;
        }
    });

    if(campoVacio){
        alert("Completar los Campos porfavor")
    }
    else{
        
        this.submit();
    }



});