const axios = require('axios');
document.addEventListener('DOMContentLoaded',function() {

    const enviar= document.getElementById('enviar');

    enviar.addEventListener('submit', function(event){

        event.preventDefault();
        enviarFormulario();
    });
});

const enviarFormulario = async (req,res)=>{

    const movieData={

        title: document.getElementById('title').value,
        director: document.getElementById('director').value,
        duration: document.getElementById('duration').value,
        year: document.getElementById('year').value,
        rate: document.getElementById('rate').value,
        genre: document.getElementById('genre').value.split(),
        poster: document.getElementById('poster').value
    };
    const newMovie={title,director,duration,year,rate,genre,poster};
    try {

        const response = await axios.post('http://localhost:3000/movies/',newMovie)
        res.status(201).json(response)

    }
    catch(error){
        console.log('error');
    }




}
module.exports= enviarFormulario;