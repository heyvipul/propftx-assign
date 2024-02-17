import { useEffect, useState } from "react";
import "../styles/dashboard.css"
import axios from "axios"
import AddMovie from "./AddMovie";

const Dashboard = ({ search }) => {
  const [movieData, setMovieData] = useState([]);
  const [toggle, setToggle] = useState(true)
  const [filteredData, setFilteredData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading,setLoading] = useState(false)

  console.log(search);

  async function getMovies() {
    try {
      const response = await axios.get("/movies")
      const data = response.data
      setLoading(true)
      setMovieData(data)

    } catch (error) {
      console.log(error);
    }
  }

  console.log(movieData);

  useEffect(() => {
    getMovies()
  }, [])


  //search functionality
  useEffect(() => {
    const filteredResults = movieData.filter((movie) =>
      movie.Title.toLowerCase().includes(search.toLowerCase())
    );

    if (!search) {
      setFilteredData(movieData);
    } else {
      setFilteredData(filteredResults);
    }
  }, [movieData, search]);

  

  return (
    <div className="dashboard">
      <div className="first">
        <div>
          <h3 onClick={() => setToggle(true)}>New Releases</h3>
          <h3 onClick={() => setToggle(false)}>Add Movie</h3>
          <h3>Watch Later [<span>{count}</span>]</h3>
          <h3>Coming Soon</h3>
          <h3>Favourites</h3>
        </div>
      </div>

      <div className="second">
        <div>
          {
            toggle ? <h1>New Releases!</h1> : <h1>Add Movie!</h1>
          }
        </div>

        {toggle ? (
          <div className="movie-card">
            
            {
              loading ? "" : "Loading....."
            }

            {filteredData.length === 0 ? (
              <p>No movies found.</p>
            ) : (
              filteredData.map((ele) => (
                <div key={ele.id}>
                  <img src={ele.Poster} alt="poster" />
                  <h3>{ele.Title}</h3>
                  <div>
                    <p>Year : {ele.Year}</p>
                    <p>Rating : {ele.imdbRating}</p>
                  </div>
                  <button onClick={()=>setCount(count+1)}>Add to Watchlater</button>
                </div>
              ))
            )}
          </div>
        ) : (
          <AddMovie />
        )}
      </div>
    </div>
  )
}

export default Dashboard