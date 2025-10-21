import express from "express";
import { users } from "./routes/users.route.js";
import { user } from "./routes/user.route.js";

const app=express();

app.use(express.json());

app.use('/users',users);
app.use('/user',user);

app.listen(3317,()=>{
    console.log("App is runnig on port 3317");
});