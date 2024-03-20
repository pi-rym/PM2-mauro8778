const mongoose = require("mongoose")

const movieSchema= new mongoose.Schema({

    title: {
        type: String,
        required: true
      },
      director: {
        type: String,
        required: true
      },
      duration: {
        type: Number,
        required: true
      },
      year: {
        type: Number,
        required: true
      },
      genre: {
        type: String,
        required: true
      },
      rate: {
        type: Number,
        required: true
      },
      poster: {
        type: String
      }


});

const Movies = mongoose.model("movies",movieSchema);

module.exports= Movies;