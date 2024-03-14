const movies = async ()=>{

    try {
        const response = await axios.get('https://students-api.up.railway.app/movies');
        this.getServices(response.data);
    }catch(error){
    console.log('error')
    }
    
};
let id = 4;
module.exports={

    getServices : async () => {
return movies;
},


createMovies: async (name)=> {

    const newMovies = {

        id,
        name,
    };
    id++;
    movies.push(newMovies);

}
};
        
