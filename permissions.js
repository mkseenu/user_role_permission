authUser = (req, res, next) => {
    if (req.user == null) {
        res.status(403);
        return res.send('You need to Login');
    }

    next();

}

authUserRole = (role)=>{
    return (req, res, next) => {
        if (req.user.role !== role) {
            res.status(401);
            return res.send("You don't have permission");
        }
        next();

    }
}

module.exports = { authUser , authUserRole }