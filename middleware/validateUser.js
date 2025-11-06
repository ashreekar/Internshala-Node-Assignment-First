// function middleware that validates adding user
const validateAddUser = (req, res, next) => {
    const { firstName, lastName, hobby, age } = req.body;

    // validating firstname and age are beign given
    if (!firstName) {
        return res.status(400).json("firstName is required");
    }

    if (!age) {
        return res.status(400).json("age is required");
    }

    // modifying req object by adding user object to it
    req.user = { firstName, lastName, hobby, age };
    // calling next middleware or req handler
    next();
}

// fucntion middleware to validate while updation
const validateUpdateUser = (req, res, next) => {
    // checking name being sent 
    const { firstName } = req.body;

    // validating that name cant be updated
    if (firstName) {
        return res.status(400).json("Cannot update first name");
    }

    next();
}

export { validateAddUser,validateUpdateUser };