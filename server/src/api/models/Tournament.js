const mongoose = require("mongoose");

//Applies to values that are needed in the schema(not optional)
const requiredValues = {
    type: String, 
    required: true,
    min: 1,
    max: 255
}
//Applies to values that are not required in the schema
const nonRequiredValues = {
    type: String, 
    min: 1,
    max: 255
}
//Date field values
const dateRequirements = {
    type: Date,
    required: true,
}
//
const locationModel = new mongoose.Schema({
    province: requiredValues,
    city: requiredValues,
    town: requiredValues,
    fieldName: requiredValues,
    streetName: nonRequiredValues,
    zipCode: nonRequiredValues,
});

const tournamentModel = new mongoose.Schema({
    sponsorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Sponsors',
        required: true
    },
    name: requiredValues,
    firstPrize: requiredValues,
    secondPrize: requiredValues,
    description: requiredValues,
    startDate: dateRequirements,
    endDate: dateRequirements,
    location: locationModel,
    public: {
        type: Boolean,
        required: true,
    },
    active: {
        type: Boolean,
        required: true,
    },
    paidTeams: [String], //A new that pays the joining fee gets added to the array*
    numberOfTeams: {
        type: Number,
        min: 2,
        required: true
    },
    joiningFee: {
        type: Number,
        required: true,
        min: 1
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

const tournaments = mongoose.model("Tournaments", tournamentModel);
module.exports = tournaments;