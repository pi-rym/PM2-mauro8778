const usersController = (req,res)=>{

    res.status(200).send("hola manola usuarios")


console.log("estamos reciiendo una solicitud");

}

const moviesController=(req,res)=>{

    res.status(200).send("hola manola productos")
}

module.exports={

    usersController,
    moviesController,
};