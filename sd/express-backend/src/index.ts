import express from 'express'
import {createClient} from 'redis'


const app = express();
const client = createClient();
client.connect();

app.use(express.json())

app.post("/submit",async(req,res)=>{
    const {problemid ,userid ,code ,lang}=req.body;
    //store in db
    client.LPUSH('submissions',JSON.stringify({problemid ,userid ,code ,lang}) )
    res.json({message:"success"})
})

app.listen(5000,()=>{
    console.log("server started")
})