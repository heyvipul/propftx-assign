import {Routes,Route} from "react-router-dom"
import Navbar from "./Navbar"
import Login from "./Login"

const AllRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path="/" element={<Navbar/>} />
        <Route path="/login" element={<Login/>} />
    </Routes>
    
    </div>
  )
}

export default AllRoutes