import express from "express";

const app =express();

app.listen(3030,()=>{
    console.log("server is up");
});

app.get("/",(req,res)=>{
    res.send("hello virta project");
});
