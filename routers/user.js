const express = require("express");
var multer = require('multer')
var upload = multer({ dest: 'uploads/' })
let fs = require("fs");

const router = express.Router();

const { getUsers, addUser } = require("../controllers/user");

router.get("/users", getUsers);

router.post("/user", addUser);

var cpUpload = upload.fields([
    { name: 'image', maxCount: 1 }
]);

router.post("/upload", cpUpload, (req, res) => {
    console.log(res.body, req.files);
    res.writeHead(200,{'content-type':'image/jpeg'});
    fs.createReadStream(req.files[0].path).pipe(res);
    res.json();
});


module.exports = router;