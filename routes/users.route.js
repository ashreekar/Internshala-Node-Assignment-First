import { Router } from "express";
import { getData, getSingleUserData } from "../controller/users.controller.js"

const users = Router();

// get router for fetching all user
users.route('/').get(getData);

// get route for getting a user by id
users.route('/:id').get(getSingleUserData);

export { users };