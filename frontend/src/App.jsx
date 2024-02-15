
import './App.css'
import Navbar from './components/Navbar'
import axios from "axios"

axios.defaults.baseURL = "http://localhost:8000"

function App() {


  return (
    <>
      <Navbar/>
    </>
  )
}

export default App
