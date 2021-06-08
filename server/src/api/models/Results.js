const mongoose = require("mongoose");

const {matchModel} = require('./Match');

const resultsModel = new mongoose.Schema({

    tournamentID: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Tournaments'
    },
    winner: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Teams',
        required: true,
    },
    secondPlace: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Teams',
        required: true
    },
    thirdPlace: {
        type:  mongoose.Schema.Types.ObjectId,
        ref: 'Teams',
        required: false
    },
    matchesArray: [matchModel]
});

const results = mongoose.model("Results", resultsModel);
module.exports = results;