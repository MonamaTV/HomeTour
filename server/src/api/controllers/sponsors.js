const bcrypt = require("bcrypt");
const { loginForSponsorsAndTeams } = require("../helpers/login");
const sponsors = require("../models/Sponsor");
const { sponsorValidation } = require("../validations/schemaValidations");

module.exports.loginSponsor = async (req, res) => {

    const {email, password } = req.body;

    const loginResults = await loginForSponsorsAndTeams(sponsors, email, password);

    if(!loginResults.status) {
        return res.send({
            message: loginResults.message,
            code: 400
        })
    }
};

module.exports.registerSponsor = async (req, res) => {

    const {
        name,
        email,
        password,
        telephone
    } = req.body;
    //Validating data
    const validateResults = sponsorValidation({
        name,
        email,
        password,
        telephone
    });
    //If errors occur, then we cannot proceed with the operation
    if(validateResults?.error) {
        return res.status(400).send({
            message: "Invalid details provided",
            code: 400
        });
    }
    //Find one user
    const user = await sponsors.findOne({email: email});
    //If user already exists in the database, we cannot register another with the same email
    if(user) {
        return res.status(400).send({
            message: "User already exists",
            code: 400
        });
    }
    //Hashing password before saving to the database
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newSponsor = new sponsors({
        email,
        name,
        telephone,
        password: hashedPassword,
        active: true,
    });

    try {
        const savedSponsor = await newSponsor.save();
        res.status(200).send({
            sponsor: savedSponsor,
            message: "New sponsor has been added",
            code: 201
        })
    } catch (error) {
        res.status(400).send({
            message: "Failed to add new sponsor",
            code: 400
        })
    }
};

module.exports.updateSponsor = (req, res) => {
     
};

module.exports.deleteSponsor = (req, res) => {

};


