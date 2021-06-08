const Joi = require("joi");

//Validation for team registration
module.exports.teamValidation = (team) => {
    const teamSchema = {
        name: Joi.string()
            .min(1)
            .max(255)
            .required(),
        captain: Joi.string()
            .min(1)
            .max(255)
            .required(),
        email: Joi.string()
            .email()
            .min(4)
            .max(255)
            .required(),
        active: Joi.boolean(),
        telephone: Joi.string()
            .required()
            .length(10),
        manager: Joi.string()
            .min(1)
            .max(255)
            .required(),
        password: Joi.string()
            .min(8)
            .max(255)
            .required()
    }
    return Joi.object(teamSchema).validate(team);
}

//Validation for sponsor registration
module.exports.sponsorValidation = (sponsor) => {
    const sponsorSchema = {
        name: Joi.string()
            .min(1)
            .max(255)
            .required(),
        email: Joi.string()
            .email()
            .min(4)
            .max(255)
            .required(),
        telephone: Joi.string()
            .required()
            .min(10)
            .max(10),
        password: Joi.string()
            .min(8)
            .max(255)
            .required()
    }
    return Joi.object(sponsorSchema).validate(sponsor);
}

//Tournament registration validation
module.exports.tournamentValidation = (tournament) => {
    const tournamentSchema = {
        name: Joi.string()
            .min(1)
            .max(255)
            .required(),
        sponsorID: Joi.string()
            .min(10)
            .max(255)
            .required(),
        location: {
            province: Joi.string()
                .min(1).max(255)
                .required(),
            city: Joi.string()
                .min(1).max(255)
                .required(),
            town: Joi.string()
                .min(1).max(255)
                .required(),
            fieldName: Joi.string()
                .min(1).max(255)
                .required(),
            streetName: Joi.string(),
            zipCode: Joi.string()
            
        },
        startDate: Joi.date()
            .required(),
        endDate: Joi.date()
            .required(),
        joiningFee: Joi.number()
            .required(),
        firstPrize: Joi.string()
            .required(),
        public: Joi.boolean()
            .required(),
        active: Joi.boolean()
            .required(),
        secondPrize: Joi.string(),
        numberOfTeams: Joi.string().min(1),
        description: Joi.string().min(1).max(255)
    }
    return Joi.object(tournamentSchema).validate(tournament);
}