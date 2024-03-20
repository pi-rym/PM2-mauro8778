const renderCards = require ("./renderCards");

const axios = require("axios");


const getFilms = async ()=>{

    try {
        const response = await axios.get('http://localhost:3000/movies');

        renderCards(response.data);
    }catch(error){
    console.log('error');
    }
    
};




const createMovie = async ()=> {

try{
    const response = await axios.post('http://localhost:3000/movies', movieData)

    movieData(response.data)
}

catch(error){

    console.log("erorr al crear pelicula")
}
};





module.exports = {
    getFilms,
    createMovie
}
 