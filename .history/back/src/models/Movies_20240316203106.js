const mangoose=require("mongoose")

const movieEsquema= new mongoose.Schema({

    title: String,
    director: String,
    duration: Number,
    year:Number,
    genre: [],
    rate:Number,
    poster: url,



})

const Movies=mongoose.model("movies",movieEsquema);