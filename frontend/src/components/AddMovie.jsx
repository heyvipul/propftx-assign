import { useState } from "react";
import "../styles/addmovie.css"
import axios from "axios";
import {useNavigate} from  "react-router-dom"

const AddMovie = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        Title: '',
        Year: '',
        Released: '',
        Genre: '',
        Director: '',
        Actors: '',
        Language: '',
        Country: '',
        Poster: '',
        imdbRating: ''
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();

        try {
           const response = await axios.post("/movies",formData) 
           const data = response.data 
           console.log(data);
           if(data.message === "movie posted"){
            alert("Movie Posted successfully!")
            navigate("/")
           }
        } catch (error) {
           console.log(error); 
        }
         
        console.log(formData);
        setFormData({
          Title: '',
          Year: '',
          Released: '',
          Genre: '',
          Director: '',
          Actors: '',
          Language: '',
          Country: '',
          Poster: '',
          imdbRating: ''
        });
      };

  return (
    <div>
        <form className="form" onSubmit={handleSubmit}>
        <label>Title :</label>
        <input type="text" name="Title" value={formData.Title} onChange={handleChange} placeholder="Enter Title" required /><br />

        <label>Year :</label>
        <input type="number" name="Year" value={formData.Year} onChange={handleChange} placeholder="Enter Year" required /><br />

        <label>Date :</label>
        <input type="date" name="Released" value={formData.Released} onChange={handleChange} placeholder="Released" /><br />

        <label>Genre :</label>
        <input type="text" name="Genre" value={formData.Genre} onChange={handleChange} placeholder="Enter Genre" /><br />

        <label>Director :</label>
        <input type="text" name="Director" value={formData.Director} onChange={handleChange} placeholder="Enter Director" /><br />

        <label>Actors :</label>
        <input type="text" name="Actors" value={formData.Actors} onChange={handleChange} placeholder="Enter Actors" /><br />

        <label>Language :</label>
        <input type="text" name="Language" value={formData.Language} onChange={handleChange} placeholder="Enter Language" /><br />

        <label>Country :</label>
        <input type="text" name="Country" value={formData.Country} onChange={handleChange} placeholder="Enter Country" /><br />

        <label>Poster url :</label>
        <input type="text" name="Poster" value={formData.Poster} onChange={handleChange} placeholder="Image URL" /><br />

        <label>Imdb Rating :</label>
        <input type="number" name="imdbRating" value={formData.imdbRating} onChange={handleChange} placeholder="Enter IMDB Rating" min="0" max="10" /><br />
        <button type="submit">Add Movie</button>
    </form>
    </div>
  )
}

export default AddMovie