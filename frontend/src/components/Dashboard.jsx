import { useEffect, useState } from "react";
import "../styles/dashboard.css"
import axios from "axios"
import AddMovie from "./AddMovie";

const Dashboard = () => {
  const [movieData,setMovieData] = useState([]);
  const [toggle,setToggle] = useState(true)

  async function getMovies(){
    try {
      const response = await axios.get("/movies")
      const data = response.data
      setMovieData(data)
      
    } catch (error) {
      console.log(error);
    }
  }

  console.log(movieData);

  useEffect(()=>{
    getMovies()
  },[movieData])

  return (
    <div className="dashboard">
        <div className="first">
          <div>
            <h3 onClick={()=>setToggle(true)}>New Releases</h3>
            <h3 onClick={()=>setToggle(false)}>Add Movie</h3>
            <h3>Watch Later</h3>
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
            {
              toggle ? <div className="movie-card">
              {
                movieData?.map(function(ele){
                  return <div key={ele.id}>
                   <img src={ele.Poster} alt="poster" />
                   <h3>{ele.Title}</h3>
                   <div>
                      <p>Year : {ele.Year}</p>
                      <p>Rating : {ele.imdbRating}</p>
                   </div>
                   <button>Add to Watchlist</button>
                  </div>
                })
              }
            </div> : <AddMovie/>
            }
        </div>
    </div>
  )
}

export default Dashboard