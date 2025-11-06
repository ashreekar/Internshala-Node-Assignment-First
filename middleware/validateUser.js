const validateAddUser = (req, res, next) => {
    const { firstName, lastName, hobby, age } = req.body;

    if (!firstName) {
        return res.status(400).json("firstName is required");
    }

    if (!age) {
        return res.status(400).json("age is required");
    }

    req.user = { firstName, lastName, hobby, age };
    next();
}
const validateUpdateUser = (req, res, next) => {
    const { firstName } = req.body;

    if (firstName) {
        return res.status(400).json("Cannot update first name");
    }

    next();
}

export { validateAddUser,validateUpdateUser };