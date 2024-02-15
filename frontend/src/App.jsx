
import './App.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import axios from "axios"
axios.defaults.baseURL = "http://localhost:8000"

function App() {


  return (
    <>
      <Navbar/>
      <Dashboard/>
    </>
  )
}

export default App
