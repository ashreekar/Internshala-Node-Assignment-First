import express from "express";

const app=express();

app.get('/',(req,res)=>{
    res.send("Namskara Devru");
});

app.listen(3317,()=>{
    console.log("App is runnig on port 3317");
});