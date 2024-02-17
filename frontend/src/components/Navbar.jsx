import { useContext, useEffect, useState } from "react"
import "../styles/navbar.css"
import Dashboard from "./Dashboard"
import { Link } from "react-router-dom"
import { authContext } from "./AuthContext"

const Navbar = () => {

  const [search,setSearch] = useState("")
  const [auth,setAuth] = useState(false);

  let user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(true);
    }
  }, []);

  return (
    <>
    <div className="navbar">
        <Link className="link-heading" to={"/"}><h2>MOVIE APP</h2></Link>
        <div>
            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search movies..." />
            <Link className="link-heading" to={"/login"}> <h2>{auth ? user : "Login/Signup"}</h2></Link>
        </div>
    </div>
     <Dashboard search={search}/>
    </>
    
  )
}

export default Navbar