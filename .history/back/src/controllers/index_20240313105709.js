const testController = (req,res)=>{

    res.status(200).send("hola manola")


console.log("estamos reciiendo una solicitud");

}

module.exports={

    testController,
};