var MongoClient = require('mongodb').MongoClient;

exports.getUsers = (req, res) => {
    res.json([{ name: 123 }]);
};

exports.addUser = (req, res) => {

    console.log("dbs");
                    res.status(500).json({ message: "Unable to add" });

    // MongoClient.connect('mongodb://127.0.0.1:27017/myDB', function (err, db) {
    //     if (err) {
    //         res.status(500).json({ message: err.message });
    //     } else {
    //         console.log("successfully connected to the database");
    //         var collection = db.collection('users');
    //         collection.insert(req.body, function (err, docs) {
    //             if (err) {
    //             }
    //             res.json(req.body);
    //             db.close();
    //         })
    //     }
    // });
};