require("dotenv").config();


const mongoose= require("mongoose");

const conDb = async()=>{
try{
    await mongoose.connect("mongodb+srv://maurodiaz8778:iISsfP5wlFT1vGne@m2.hmaj2mh.mongodb.net/M2?retryWrites=true&w=majority&appName=M2")
    console.log("Conexión exitosa a la base de datos");
}

catch(error){

    console.error("Error al conectar a la base de datos:", error);
}
};

module.exports = conDb;