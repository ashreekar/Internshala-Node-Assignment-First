import { Router } from "express";
import {addUser} from "../controller/user.controller.js";

const user = Router();

user.route('/').post(addUser)

user.route('/:id')
    .put((req, res) => {
        console.log("Users route")
        res.json({
            message: "OK"
        })
    })
    .delete((req, res) => {
        console.log("Users route")
        res.json({
            message: "OK"
        })
    })

export { user };