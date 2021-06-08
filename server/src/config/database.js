const mongoose = require("mongoose");

const databaseConfiguration = mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, 
    useUnifiedTopology: true 
    }, err => {

    if(err) throw err;

    console.log("The database is connected.");

});

module.exports = databaseConfiguration;