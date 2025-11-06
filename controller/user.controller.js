import { User } from "../utils/data.model.js";
import { userData } from "../data/user.data.js";
import { nanoid } from 'nanoid';
// imported userdata for storing and manipulating data
// imported nanoid for creating a unique id

// function to add user
function addUser(req, res) {
    // user object is coming from validation middleware
    const { firstName, lastName, hobby, age } = req.user;

    // validating all fields exists
    if (!firstName || !lastName || !hobby || !age) {
        return res.status(400).json({
            "message": "All fields must be required"
        })
    }

    // creting new user by pre defined class of User
    const newUser = new User(firstName, lastName, hobby, age);

    // adding new user
    userData.push({ id: nanoid(6), data: newUser });

    // responding with 201 and userbody
    res.status(201).json({
        "message": "user created",
        "user": newUser
    })
}

// function to update user 
function updateUser(req, res) {
    //user id existes in req.params.id as it is a dynamic route
    const userId = req.params.id;
    const user = userData.find(user => user.id == userId);

    // if user not exists return a 404
    if (!user) {
        return res.status(404).json({
            "message": "User not found"
        })
    }

    // mapping all fields that are sent to update and updating in user.data
    Object.keys(req.body).map(key => {
        user.data[key] = req.body[key];
    });

    // removing the un updated user and updating it and pushing it
    const updateDUser = userData.filter(user => user.id != userId);
    updateDUser.push(user);
    // userData = updateDUser;

    res.status(201).json({
        "message": "user updated",
        "user": user
    })
}

// function to delete a user
function deleteUser(req, res) {
    //user id existes in req.params.id as it is a dynamic route
    const userId = req.params.id;

    // finding user by id
    const index = userData.findIndex(user => user.id == userId);

    // if user not found responding with 404
    if (index === -1) {
        return res.status(404).json({
            "message": "User not found"
        })
    }

    // removing user from data
    userData.splice(index, 1);

    res.status(200).json({
        "message": "user deleted"
    })
}

export { addUser, updateUser, deleteUser };