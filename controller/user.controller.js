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

    res.status(203).json({
        "message": "user updated",
        "user": user
    })
}


function deleteUser(req, res) {
    const userId = req.params.id;

    const user = userData.find(user => user.id == userId);
    if (!user) {
        res.status(404).json({
            "message": "User not found"
        })
    }

    const updateDUser = userData.filter(user => user.id != userId);
    userData=updateDUser;
    res.status(203).json({
        "message": "user updated"
    })
}

export { addUser, updateUser, deleteUser };