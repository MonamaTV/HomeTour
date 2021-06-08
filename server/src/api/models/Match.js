const mongoose = require("mongoose");

const teamRequirements = {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Teams',
    required: true
};

//Possible penalty shoot out
const penalties = new mongoose.Schema({
    scoreA: {
        type: Number,
        default: 0
    },
    scoreB: {
        type: Number,
        default: 0
    }
});

const matchModel = new mongoose.Schema({
    tournamentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tournaments',
        required: true
    },
    teamA: teamRequirements,
    teamB: teamRequirements,
    scoreA: {
        type: Number,
        default: 0
    },
    scoreB: {
        type: Number,
        default: 0
    },
    commencementTime: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    penaltyShootout: penalties, //Possible penalty shoot out
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports.matchModel = matchModel;
module.exports.matches = mongoose.model("Matches", module.exports.matchModel);
