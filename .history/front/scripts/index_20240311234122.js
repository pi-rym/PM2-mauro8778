
const renderCards = require ("./renderCards");

const axiox= require("axios");

$.get("https://students-api.up.railway.app/movies",(data)=>{



 renderCards(data);

}
);
/*const fetchData = ()=>{

    const tarj = axios.get(...);

    renderCards(data);
}*/





   