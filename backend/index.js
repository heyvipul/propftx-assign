const express = require("express")
const mongoose = require("mongoose");
const movieRouter = require("./Routes/movie.routes.");
const cors = require("cors");
const bodyParser = require('body-parser');
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
app.use("/",(req,res)=>{
    res.send("hello world from movies")
})



app.listen(8000,()=>{
    console.log(`Api running on ${PORT}`);
})