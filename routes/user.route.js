import { Router } from "express";
import { addUser, deleteUser, updateUser } from "../controller/user.controller.js";
import { validateAddUser, validateUpdateUser } from "../middleware/validateUser.js";

const user = Router();

user.route('/').post(validateAddUser, addUser)

user.route('/:id')
    .put(validateUpdateUser, updateUser)
    .delete(deleteUser)

export { user };