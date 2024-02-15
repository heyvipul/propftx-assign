const express = require("express")
const mongoose = require("mongoose");
const movieRouter = require("./Routes/movie.routes.");
require('dotenv').config()
const PORT = process.env.PORT || 8080
const app = express();
app.use(express.json());

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

app.use("/",(req,res)=>{
    res.send("hello world from movies")
})



app.listen(8000,()=>{
    console.log(`Api running on ${PORT}`);
})