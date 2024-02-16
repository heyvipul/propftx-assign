import { useState } from "react"
import "../styles/navbar.css"
import Dashboard from "./Dashboard"
import { Link } from "react-router-dom"

const Navbar = () => {

  const [search,setSearch] = useState("")

  return (
    <>
    <div className="navbar">
        <Link className="link-heading" to={"/"}><h2>MOVIE APP</h2></Link>
        <div>
            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search movies..." />
            <Link className="link-heading" to={"/login"}><h2>Login/Signup</h2></Link>
        </div>
    </div>
     <Dashboard search={search}/>
    </>
    
  )
}

export default Navbar