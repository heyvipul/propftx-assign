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

module.exports = movieRouter;
