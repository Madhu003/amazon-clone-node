const User = require("../modles/user");

exports.getUsers = (req, res) => {
    // res.json([{ name: 123 }]);
    User.find({}, (err, list) => {
        console.log(list)
        res.json(list);
    })
}

exports.addUser = (req, res) => {
    let user = new User(req.body);
    user.save((err, user) => {
        if (err) {
            return res.status(500).json({ message: "Unable to add" });
        }

        res.json(user);
    });
}