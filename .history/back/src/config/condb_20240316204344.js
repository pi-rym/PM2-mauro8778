const mongoose= require("mongoose");

const conDb = async()=>{

mongoose.connect("mongodb+srv://maurodiaz8778:<password>@m2.hmaj2mh.mongodb.net/?retryWrites=true&w=majority&appName=M2")

};

module.exports = conDb;