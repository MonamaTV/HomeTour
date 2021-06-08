const mongoose = require("mongoose");

const requirements = {
    type: String,
    required: true,
    min: 1,
    max: 255,
};

const teamModel = new mongoose.Schema({
    name: requirements,
    captain: requirements,
    manager: requirements,
    telephone: {
        type: String,
        required: true,
        min: 10,
        max: 10,
    },
    email: requirements,
    password: requirements,
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    active: {
        type: Boolean,
        default: true
    }
});

const teams = mongoose.model("Teams", teamModel);
module.exports = teams;