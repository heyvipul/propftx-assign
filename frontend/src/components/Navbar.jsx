import { useState } from "react"
import "../styles/navbar.css"
import Dashboard from "./Dashboard"

const Navbar = () => {

  const [search,setSearch] = useState("")

  return (
    <>
    <div className="navbar">
        <h2>MOVIE APP</h2>
        <div>
            <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search movies..." />
            <h2>Login/Signup</h2>
        </div>
    </div>
     <Dashboard search={search}/>
    </>
    
  )
}

export default Navbar