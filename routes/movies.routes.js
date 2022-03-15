const router = require("express").Router();

// all your routes here
const Movie = require("../models/Movie.model");
const Celebrity = require("../models/Celebrity.model");
const { default: mongoose } = require("mongoose");

router.get("/movies", async (req, res) => {
  try {
    const allMovies = await Movie.find();
    console.log(allMovies);
    res.render("movies/movies", { allMovies });
  } catch (err) {}
});

router.get("/movies/create", async (req, res) => {
  try {
    const allCelebrities = await Celebrity.find();
    res.render("movies/new-movie", { allCelebrities });
  } catch (err) {}
});

router.post("/movies/create", async (req, res) => {
  try {
    const { title, genre, plot, cast } = req.body;
    console.log(req.body);
    await Movie.create({
      title: title,
      genre: genre,
      plot: plot,
      cast: cast,
    });
    res.redirect("/movies");
  } catch (err) {
    console.log("An error occured");
    res.render("movies/new-movie");
  }
});

router.get("/movies/:id", async (req, res) => {
  try {
    const movieId = mongoose.Types.ObjectId(req.params.id);
    const movieDetails = await Movie.findById(movieId);
    await oneMovie.populate("cast");
    console.log(oneMovie);
    res.render("movie/movie-details", { oneMovie });
  } catch (err) {
    cconsole.log("An error from moviesId occured");
    res.render("movies/movies");
  }
});

module.exports = router;
