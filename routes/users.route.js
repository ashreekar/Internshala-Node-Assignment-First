import { Router } from "express";
import { getData, getSingleUserData } from "../controller/users.controller.js"

const users = Router();

users.route('/').get(getData);

users.route('/:id').get(getSingleUserData);

export { users };