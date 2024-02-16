
import './App.css'
import AllRoutes from './components/AllRoutes'
import Navbar from './components/Navbar'
import axios from "axios"

axios.defaults.baseURL = "http://localhost:8000"

function App() {


  return (
    <>
      {/* <Navbar/> */}
      <AllRoutes/>
    </>
  )
}

export default App
