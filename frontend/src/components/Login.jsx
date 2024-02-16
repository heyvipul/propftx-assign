import { Link, useNavigate } from "react-router-dom"
import "../styles/navbar.css"
import { useState } from "react";
import axios from "axios";

const Login = () => {
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("");
    const[toggle,setToggle] = useState(true);
    const navigate = useNavigate()

    //login
    const[eemail,setEemail] = useState("john@gmail.com")
    const[ppassword,setPpassword] = useState("john123");
    


    async function signUp(e){
        e.preventDefault()
        console.log(name,email,password);
  
        try {
          const response = await axios.post("/register",{
            name,
            email,
            password
          })
          const data = await response.data
          console.log(data);
          if(data.msg === "signup successfull!"){
            alert("Signup successfull!")
            setToggle(!toggle)
          }
          
        } catch (error) {
          console.log(error);
        }
      }


      //login function
    async function loginFun(e){
        e.preventDefault()
        console.log(email,password);
        try {
          const response = await axios.post("/login",{
            email : eemail,
            password : ppassword
          })
          const data = await response.data
          if(data.msg == "Login successfull!")
          alert("Login successfull")
          navigate("/")
      
        } catch (error) {
          console.log(error);
        }
      }



  return (
    <>
        <div className="navbar">
            <Link className="link-heading" to={"/"}><h2>MOVIE APP</h2></Link>
            <div>
                
                <Link className="link-heading" to={"/login"}><h2>Login/Signup</h2></Link>  
            </div>
        </div>

        <div className="login-outer">
            {
                toggle ? <div className="login">
                <form action="" id='form' onSubmit={loginFun}>
                <h2>Login</h2>
                <label htmlFor="">Email : </label>
                <input type="email"
                value={eemail} 
                onChange={(e)=>setEemail(e.target.value)} 
                placeholder='enter email' />

                <label htmlFor="">Password : </label>
                <input type="password"
                value={ppassword}
                onChange={(e) => setPpassword(e.target.value)}
                placeholder='enter password' /> <br />

                <button id='login'>Login</button>
                <p>Don't have an account? <span onClick={()=>setToggle(!toggle)}>Signup</span></p>
                </form>
            </div> 
            : 
            <div className="login">
                <form action="" id='form' onSubmit={signUp}>
                <h2>Signup</h2>
                <label htmlFor="">Name: </label>
                <input type="name"
                value={name} 
                onChange={(e)=>setName(e.target.value)} 
                placeholder='enter name' />

                <label htmlFor="">Email : </label>
                <input type="email"
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                placeholder='enter email' />

                <label htmlFor="">Password : </label>
                <input type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='enter password' /> <br />

                <button id='login'>Signup</button>
                <p>Don't have an account? <span onClick={()=>setToggle(!toggle)}>Login</span></p>
                </form>
            </div>
            }

        </div>

        
    </>
  )
}

export default Login