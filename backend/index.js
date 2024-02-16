const express = require("express")
const mongoose = require("mongoose");
const movieRouter = require("./Routes/movie.routes.");
const SECRET_KEY = process.env.SECRET_KEY || "afkdhkcxjvndbdnfc"
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const cors = require("cors");
const bodyParser = require('body-parser');
const User = require("./models/user");
require('dotenv').config()
const PORT = process.env.PORT || 8080
const app = express();

//middlewares
app.use(express.json());
app.use(bodyParser.json());
app.use(cors({
    origin: "*",   
}));

//mongoose connection
async function main(){
    try {
       await mongoose.connect(process.env.MONGODB)
       console.log("mongodb connection successfully!");
    } catch (error) {
        console.log("connection failed");
    }
}
main()

app.use("/",movieRouter)

//signup.register
app.post("/register", async(req,res)=>{
    try {
        const{name,email,password} = req.body
        const user_exist = await User.findOne({email})
        if(user_exist){
            return res.send({msg:"user exist"})
        }
        bcrypt.hash(password,4,async(err,hash)=>{
            await User.create({name,email,password:hash})
            res.send({msg:"signup successfull!"})
        })

    } catch (error) {
        res.send({error:"signup failed!"})
        console.log(error);   
    }
})

//login
app.post("/login",async (req,res)=>{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(!user){
        return res.send({msg:"User not exist!"})
    }
    const hash_password = user?.password
    bcrypt.compare(password,hash_password,async(err,result)=>{
        if(err){
            throw err;
        };
        if(result){
            const token = jwt.sign({userId:user._id},SECRET_KEY);
            res.send({msg:"Login successfull!",token:token})
        }else{
            res.send({msg:"password not match"})
        }
        
    })

})


app.use("/",(req,res)=>{
    res.send("hello world from movies")
})

app.listen(8000,()=>{
    console.log(`Api running on ${PORT}`);
})