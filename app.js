const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const user = require("./src/routers/user");

mongoose
    .connect("mongodb://127.0.0.1:27017/myDB", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log("DB CONNECTED");
    });
 
//Middlewares
app.use(bodyParser.json());

// routes
app.use("/api", user);

app.listen(8000, () => {
    console.log("Server is listeneing on port: " + 8000);
});