const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

let userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            requried: true
        },
        password: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

userSchema.pre("save", async function (next) {
    try {
        if (!user.isModified("password"))
            next();
        this.password = await bcrypt.hash(this.password, 13);
        next();
    } catch (e) {
        console.error(e);
        next(e);
    }
});

userSchema.method.comparePssword = async function () {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (e) {
        console.error(e);
        return false;
    }
}

module.exports = mongoose.model("User", userSchema);