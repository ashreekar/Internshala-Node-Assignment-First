import { Router } from "express";
import {addUser, deleteUser, updateUser} from "../controller/user.controller.js";

const user = Router();

user.route('/').post(addUser)

user.route('/:id')
    .put(updateUser)
    .delete(deleteUser)

export { user };