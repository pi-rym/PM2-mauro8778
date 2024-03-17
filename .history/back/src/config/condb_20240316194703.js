const mongoose= require("mongoose");

module.exports={
   
    condb: async ()=>{

    try {
        const {data} = await axios.get(
'https://students-api.up.railway.app/movies'
);
return data;
}
   
 catch(error){
        throw new error(error);
    }
    
},

};