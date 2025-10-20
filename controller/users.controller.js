import { userData } from "../data/user.data.js";

function getData(req, res) {
    if (userData.length === 0) {
        return res.status(201).json({
            "messsgae": "No data available"
        })
    }

       res.status(200).json({
        "users":userData
    })
}

function getSingleUserData(req, res) {
    const userId = req.params.id;
    const user = userData.find(user => user.id == userId);

    if(!user){
         return res.status(404).json({
            "messsgae": "No user available"
        })
    }

    res.status(200).json({
        "user":user
    })
}

export { getData,getSingleUserData };