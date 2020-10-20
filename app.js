const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const user = require("./routers/user");

//Middlewares
app.use(bodyParser.json());

// routes
app.use("/api", user);

app.listen(8000, () => {
    console.log("Server is listeneing on port: " + 8000);
});