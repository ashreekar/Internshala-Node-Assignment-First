import { User } from "../utils/data.model.js";
import { userData } from "../data/user.data.js";
import { nanoid } from 'nanoid';

function addUser(req, res) {
    const { firstName, lastName, hobby, age } = req.user;

    if(!firstName || !lastName || !hobby || !age){
        return res.status(400).json({
            "message":"All fields must be required"
        })
    }

    const newUser = new User(firstName, lastName, hobby, age);

    userData.push({ id: nanoid(6), data: newUser });

    res.status(201).json({
        "message": "user created",
        "user": newUser
    })
}

function updateUser(req, res) {
    const userId = req.params.id;
    const user = userData.find(user => user.id == userId);

    if (!user) {
        return res.status(404).json({
            "message": "User not found"
        })
    }

    Object.keys(req.body).map(key => {
        user.data[key] = req.body[key];
    });

    const updateDUser = userData.filter(user => user.id != userId);
    updateDUser.push(user);
    // userData = updateDUser;

    res.status(201).json({
        "message": "user updated",
        "user": user
    })
}


function deleteUser(req, res) {
    const userId = req.params.id;

    const index = userData.findIndex(user => user.id == userId);

    if (index===-1) {
        return res.status(404).json({
            "message": "User not found"
        })
    }

    userData.splice(index,1);

    res.status(200).json({
        "message": "user deleted"
    })
}

export { addUser, updateUser, deleteUser };