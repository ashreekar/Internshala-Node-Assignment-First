import { User } from "../data/data.model.js";
import { userData } from "../data/user.data.js";

function addUser(req, res) {
    const { firstName, lastName, hobby, age } = req.body;

    const newUser = new User(firstName, lastName, hobby, age);

    userData.push({ id: userData.length + 1, data: newUser });

    res.status(201).json({
        "meassage": "user created",
        "user": newUser
    })
}

export { addUser };