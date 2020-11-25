const jwt = require("jsonwebtoken");

const User = require("../modles/user");
const screteKey = "abc";

exports.login = (req, res) => {
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user)
            return res
                .status(422)
                .json({ errors: ["no such user exists"] });

        if (await user.comparePassword(password)) {
            const token = jwt.sign({ id: user._id }, screteKey, {
                expiresIn: "1h"
            });

            return res
                .status(200)
                .json({ msg: "user logged in", token });
        }

        return res
            .status(403)
            .json({ errors: ["invalid password"] });
    } catch (e) {
        console.error(e);
        res.staus(500).json({ errors: ["some error occured"] });
    }

    if (user.email == "madhu@gmail.com") {
        res.json({ message: "Logged In" })
    } else {
        res.status(400).json({ message: "wrong user pass" });
    }
}

exports.signup = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        let user = await User.findOne({ email });

        if (!user) {
            let newUser = new User({ name, email, password });
            await newUser.save();
            return res.status(200).json({ msg: "user successfully created" });
        }

        return res
            .status(422)
            .json({ errors: ["this email is already registered "] })
    } catch (e) {
        console.error(e);
        return res
            .status(500)
            .json({ errors: ["some error occured"] });
    }
}

exports.me = (req, res) => {
    const token = req.header("X-Auth");

    try {
        if (!token)
            return res
                .status(403)
                .json({ errors: ["unauthorized access"] });

        const decodedToken = jwt.verify(token, screteKey);
        const user = await User.findById(decodedToken._id, "name email");

        if (!user)
            return res
                .status(403)
                .json({ errors: ["unauthorized"] });

        return res.status(200).json({ user });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ errors: ["some error occured"] });
    }
}