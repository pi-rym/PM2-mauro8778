
const renderCards = require ("./renderCards");

const axiox= require("axios");

/*$.get("https://students-api.up.railway.app/movies",(data)=>{



 renderCards(data);

}
);*/
const fetchData = async ()=>{

try{const data = await axios.get("https://students-api.up.railway.app/movies");

renderCards(data.data);
console.log(data);

}catch(err){

}
};
    


   