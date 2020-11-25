const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const { login, signup, me } = require("../controllers/auth");

router.post("/signup",
    [
        check("name")
            .isLength({ min: 3 })
            .withMessage("the name must have minimum length of 3")
            .trim(),
        check("email")
            .isEmail()
            .withMessage("invalid email address")
            .normalizeEmail(),
        check("password")
            .isLength({ min: 8, max: 15 })
            .withMessage("your password should have min and max length between 8-15")
            .matches(/\d/)
            .withMessage("your password should have at least one number")
            .matches(/[!@#$%^&*(),.?":{}|<>]/)
            .withMessage("your password should have at least one sepcial character")
    ],
    (req, res, next) => {
        const error = validationResult(req)
            .formatWith(({ msg }) => msg);

        if (!error.isEmpty())
            return res.status(422).json({ error: error.array() });

        next();
    },
    signup
);

router.post("/login",
    [
        check("email")
            .isEmail()
            .withMessage("invalid message")
            .normalizeEmail(),
        check("password")
            .isLength({ min: 8, max: 15 })
            .withMessage("invalid password")
    ],
    (req, res, next) => {
        let error = validationResult(req)
            .formatWith(({ msg }) => msg);

        if (!error.isEmpty())
            return res.status(422).json({ errors: error.array() });

        next();
    },
    login
);

router.post("/me", me)

module.exports = router;