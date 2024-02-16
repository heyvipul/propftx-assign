const express = require("express")
const Movies = require("../models/movie")
const movieRouter = express.Router();


//Get all movies

movieRouter.get("/movies", async (req,res)=>{
    try {
        const movies = await Movies.find();
        res.json(movies);
      } catch (error) {
        res.status(500).json({ message: error });
    }
})


//Post a movie
movieRouter.post("/movies", async (req,res) => {
  const movie = new Movies(req.body);
  try {
    const newMovie = await movie.save();
    res.status(201).json({newMovie,message:"movie posted"});
  } catch (error) {
    res.status(400).json({ message: "error"});
  }
});


//Search movies
movieRouter.get("/movies/search", async (req, res) => {
  try {
    const query = req.query.q;
    //using regex for case-sensitive 
    const regex = new RegExp(query, "i");
    const movies = await Movies.find({
      $or: [
        { Title: regex },
        { Director: regex }
      ]
    });
    res.status(200).json({ movies });
  } catch (error) {
    res.status(500).json({ message: "Error searching movies" });
  }
});


module.exports = movieRouter;
