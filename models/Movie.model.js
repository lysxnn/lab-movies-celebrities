//  Add your code here
const { default: mongoose } = require("mongoose");
const { model, Schema } = require("mongoose");
const movieSchema = new Schema({
  title: {
    type: String,
  },
  genre: {
    type: String,
  },
  plot: {
    type: String,
  },
  cast: [ // "celebrity" refers to the name of the database that's why it's not in capitals
    { type: mongoose.Schema.Types.ObjectId, ref: "celebrity"},
  ],
});

const Movie = model("movie", movieSchema);

module.exports = Movie;
