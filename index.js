import express from "express";
import { users } from "./routes/users.route.js";
import { user } from "./routes/user.route.js";
import fs from 'fs';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }))

app.use((req, res, next) => {
    fs.appendFile('logs.txt', `${Date.now()} ---> ${req.url} --->${req.method} ---> ${req.statusCode}\n`, (err, data) => {
        if (err) {
            return res.status(500).json({
                message: "Error from server while tracking logs"
            })
        }
        next();
    });
})

app.use((req, res, next) => {
    console.log("Request HIT");
    console.log("URL:", req.url);
    console.log("METHOD", req.method);
    console.log("STATUS CODE", req.statusCode);

    next();
})

app.use('/users', users);
app.use('/user', user);

app.listen(3317, () => {
    console.log("App is runnig on port 3317");
});