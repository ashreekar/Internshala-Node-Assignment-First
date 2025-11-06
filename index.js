import express from "express";
import { users } from "./routes/users.route.js";
import { user } from "./routes/user.route.js";
import fs from 'fs';

// express app creation
const app = express();

// accepts and parses both json, and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// middleware for loggin requests
app.use((req, res, next) => {
    // logging using a non bloacking operation
    // in a file called logs.txt
    fs.appendFile('logs.txt', `${Date.now()} ---> ${req.url} --->${req.method} ---> ${req.statusCode}\n`, (err, data) => {
        if (err) {
            // responding with 500 as internal server error
            return res.status(500).json({
                message: "Error from server while tracking logs"
            })
        }
        next();
    });
})

// middleware to log each requests
app.use((req, res, next) => {
    console.log("Request HIT");
    console.log("URL:", req.url);
    console.log("METHOD", req.method);
    console.log("STATUS CODE", req.statusCode);

    next();
})

// reqgistering users and user route
app.use('/users', users);
app.use('/user', user);

app.listen(3317, () => {
    console.log("App is runnig on port 3317");
});