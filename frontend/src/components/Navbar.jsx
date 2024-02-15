import "../styles/navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <h2>MOVIE APP</h2>
        <div>
            <input type="text" placeholder="Search movies..." />
            <h2>Login/Signup</h2>
        </div>
    </div>
  )
}

export default Navbar