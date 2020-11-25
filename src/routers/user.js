const express = require("express");
const multer = require('multer')
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

const { getUsers, addUser } = require("../controllers/user");

router.get("/users", getUsers);
router.post("/user", addUser);

const cpUpload = upload.fields([
    { name: 'image', maxCount: 1 }
]);

router.post("/upload", cpUpload, (req, res) => {
    res.json({message: "Image uploaded."});
});

module.exports = router;