
import './App.css'
import AllRoutes from './components/AllRoutes'
import Navbar from './components/Navbar'
import axios from "axios"

axios.defaults.baseURL = "https://calm-blue-dhole-belt.cyclic.app/"

function App() {


  return (
    <>
      {/* <Navbar/> */}
      <AllRoutes/>
    </>
  )
}

export default App
