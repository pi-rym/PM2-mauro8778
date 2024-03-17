require("dotenv").config();


const mongoose= require("mongoose");

const conDb = async()=>{

mongoose.connect("mongodb+srv://maurodiaz8778:iISsfP5wlFT1vGne@m2.hmaj2mh.mongodb.net/M2?retryWrites=true&w=majority&appName=M2")

};

module.exports = conDb;