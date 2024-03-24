import express from 'express'
import dotenv from 'dotenv'
import router from './api/user.api.js'
dotenv.config()
const app=express()
let {PORT}=process.env

app.use(express.json())

app.use('/hdfc/v1',router)

app.get('/health',(req,res)=>{
    res.status(200).json({
        status:200,
        message:"Server is up and health is working"
    })
})


app.listen(PORT,(err)=>{
    if(err){
        console.log(`Error while connecting to server: ${err}`)
    }
    console.log(`Connected to server successfully : ${PORT}`)
})