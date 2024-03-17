const mangoose = require("mongoose")

const movieEsquema= new mongoose.Schema({

    title: String,
    director: String,
    duration: Number,
    year:Number,
    genre:String,
    rate:Number,
    poster: String,



})

const Movies=mongoose.model("movies",movieEsquema);

module.exports= Movies;