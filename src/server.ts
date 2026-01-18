import express from 'express'
import cors from 'cors'
import 'dotenv/config'


const app=express();

const PORT = process.env.PORT ?? 3000;

console.log(PORT);
app.get('/',(req,res)=>{
    res.send("it is working")
})
app.listen(PORT,()=>{
    console.log('http://localhost:3000')
})