const Joi = require("joi");

module.exports.loginValidator = (loginCredentials) => {
    
    const loginSchema = {
        password: Joi.string()
            .min(8)
            .max(255)
            .required(),
        email: Joi.string()
            .email()
            .min(1)
            .max(255)
    };
    
    return Joi.object(loginSchema).validate(loginCredentials);
};