const mongoose = require("mongoose");

let LoginSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        maxlength: 30,
        trim: true
    },
    password: {
        type: String,
        require: true,
        maxlength: 30,
        trim: true
    }
});

module.exports = mongoose.model("Login", LoginSchema);