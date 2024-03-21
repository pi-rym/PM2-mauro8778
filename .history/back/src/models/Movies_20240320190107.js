const {Schema,model} = require("mongoose")

const movieSchema= new Schema({

    title: {
        type: String,
        required: true
      },
      director: {
        type: String,
        required: true
      },
      duration: {
        type: String,
        required: true
      },
      year: {
        type: Number,
        required: true
      },
      genre: {
        type: Array,
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

const Movie = model("movies",movieSchema);

module.exports = Movie;