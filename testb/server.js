import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();
import User from "./models/users.js";
const app =express();
app.use(express.json())
connectDB();
app.get("/health",(req,res)=>{
    res.send("health is ek no.")
})
app.post("/user",async(req,res)=>{
    const name=req.body.name;
    const email=req.body.email;
    const password=req.body.password;
    
    console.log(name,email,password);
    const naam= await User.findOne({name:name}).then((user)=>{
        if(user){
            res.send("username already exists");
        }
    })
    await User.findOne({email:email}).then((user)=>{
        if(user){
            res.send("useremail already exists");
        }else{
            const user=new User({
                name:name,
                email:email,
                password:password
            });
            user.save().then((user)=>{
                res.send(user);
            }).catch((err)=>{
                console.log(err);
            })
        }
    }).catch((err)=>{
        console.log(err);
    })
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})