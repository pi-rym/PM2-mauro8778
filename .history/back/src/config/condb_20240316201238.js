const mongoose= require("mongoose");

const conDb = async()=>{

mongoose.connect("mongodb+srv://maurodiaz8778:iISsfP5wlFT1vGne@m2.hmaj2mh.mongodb.net/M2")

};

module.exports = conDb;