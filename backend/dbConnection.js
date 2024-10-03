const mongoose = require("mongoose");
const mongo_uri =  process.env.MONGO_URI;

mongoose
        .connect(mongo_uri)
        .then(()=>console.log("mongoDb connected"))
        .catch(err=> console.log(err.name, err.message))