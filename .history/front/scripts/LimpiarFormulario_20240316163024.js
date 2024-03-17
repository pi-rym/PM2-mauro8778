function limpiarFormulario() {
    document.querySelectorAll('input').forEach(input => input.value = ' ');
}

    document.getElementById('formulario').addEventListener('submit',function(event){

        event.preventDefault(); 

    const inputs = document.getElementById('input');
    
    inputs.forEach(input=>{

        if(input.value.trim()===''){

            alert("porfavor completar los datos");
        }
    })
});