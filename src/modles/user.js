const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        maxlength: 30,
        trim: true
    }
});

module.exports = mongoose.model("User", userSchema);