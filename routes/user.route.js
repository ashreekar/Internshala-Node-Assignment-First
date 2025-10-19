import { Router } from "express";

const user = Router();

user.route('/').post((req, res) => {
    console.log("Users route")
})

user.route('/:id')
    .put((req, res) => {
        console.log("Users route")
    })
    .delete(user.route('/').post((req, res) => {
        console.log("Users route")
    }))

export { user };