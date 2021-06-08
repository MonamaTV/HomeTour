const mongoose = require("mongoose")

//Requirements
const requirements = {
    type: String,
    required: true,
    min: 1,
    max: 255,
};

const sponsorModel = new mongoose.Schema({
    name: requirements,
    email: requirements,
    password: requirements,
    telephone: {
        type: String,
        required: true,
        min: 10,
        max: 10,
    },
    active: {
        type: Boolean,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const sponsors = mongoose.model("Sponsors", sponsorModel);
module.exports = sponsors;