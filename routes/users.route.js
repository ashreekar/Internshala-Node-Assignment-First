import { Router } from "express";

const users = Router();

users.route('/').get((req, res) => {
    console.log("Users route")
})

users.route('/:id').get((req, res) => {
    console.log("Users route")
})

export { users };