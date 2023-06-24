

const express=require("express")
const { connection } = require("./db")
require("dotenv").config()


const app=express()

app.use(express.json())





app.get("/",(req,res)=>{
    res.send("home route")
})




app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("db is connected")
    } catch (error) {
        console.log(error)
    }
    console.log("server is running")
})