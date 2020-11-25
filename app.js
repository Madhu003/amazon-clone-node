const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const user = require("./src/routers/user");
const auth = require("./src/routers/auth");

mongoose
    .connect("mongodb://127.0.0.1:27017/myDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log("DB CONNECTED");
    })
    .catch((e) => console.error(e));;
 
//Middlewares
app.use(bodyParser.json());

// routes
app.use("/api/auth", auth);
app.use("/api", user);


app.listen(8000, () => {
    console.log("Server is listeneing on port: " + 8000);
});