const movies = [ 
    {

        id: 1,
        name: "jorge",
    },
    {
    
    id: 2,
    name:"pedro",
    },
    
    {
    
    id: 3,
    name:"ramon",
}
]
let id = 4
module.exports={

    getServices : async () => {
return movies;
},


createMovies: async (name)=> {

    const newMovies={

        id,
        name,
    }
    id++;
    movies.push(newMovies)

}
};
        
