const validMovies= (res,req,next)=>{

const{name}= req.body;

if(!name){

    console.log("hay un error en el nombre")
}
console.log("el nombre esta correcto")

};

module.exports = validMovies;