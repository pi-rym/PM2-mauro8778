const validMovies= (req,res,next)=>{

const {name} = req.body;

if(!name){

    console.log("hay un error en el nombre");
}
else{console.log("el nombre esta correcto");

}
next();

};

module.exports = validMovies;