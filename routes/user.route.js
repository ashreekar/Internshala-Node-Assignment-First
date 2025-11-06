import { Router } from "express";
import { addUser, deleteUser, updateUser } from "../controller/user.controller.js";
import { validateAddUser, validateUpdateUser } from "../middleware/validateUser.js";

const user = Router();

// post router having a validation middleware for user creation
user.route('/').post(validateAddUser, addUser)

// patch router for updation of user with middleware for validation
// delete router for deleting user
user.route('/:id')
    .patch(validateUpdateUser, updateUser)
    .delete(deleteUser)

export { user };