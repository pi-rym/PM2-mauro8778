
const renderCards = require ("./renderCards");

const axiox= require("axios");

/*$.get("https://students-api.up.railway.app/movies",(data)=>{



 renderCards(data);

}
);*/
const fetchData = async ()=>{

    const data = await axios.get("https://students-api.up.railway.app/movies");

    renderCards(data.data);}








   