const renderCards = require("./renderCards");

const enviarFormulario = async (req,res)=>{

    const movieData={

        title: document.getElementById('title').value,
        director: document.getElementById('director').value,
        duration: document.getElementById('duration').value,
        year: document.getElementById('year').value,
        rate: document.getElementById('rate').value,
        genre: document.getElementById('genre').value,
        poster: document.getElementById('poster').value
    };
    try {

        const response = await axios.post('http://localhost:3000/movies',movieData)
        res.status(201).json(response)
        renderCards(response.data);
    }
    catch(error){
        console.log('error');
    }




}
module.exports= enviarFormulario;