import { userData } from "../data/user.data.js";

// function that sends all user
function getData(req, res) {
    // if userdata is emepty then not sending it
    if (userData.length === 0) {
        return res.status(404).json({
            "messsgae": "No data available"
        })
    }

       res.status(200).json({
        "users":userData
    })
}

// function to send a particular user data by id
function getSingleUserData(req, res) {
    // dynamic route id
    const userId = req.params.id;
    const user = userData.find(user => user.id == userId);

    // if user not exists return 404
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