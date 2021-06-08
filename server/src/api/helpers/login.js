const bcrypt = require("bcrypt");
const { loginValidator } = require("../validations/loginValidation");


module.exports.loginForSponsorsAndTeams = async (dbInstance = null, email = "", password = "") => {

    if(dbInstance === null) {
        return {
            message: "Valid to login",
            status: false
        };
    }

    const validateResults = loginValidator({email, password});

    if(validateResults.error) {
        return {
            message: "Bad request",
            status: false,
        };
    }

    const user = await dbInstance.findOne({email: email});

    if(!user) {
        return {
            message: "User does not exist",
            status: false
        };
    }

    const validPassword = await bcrypt.compare(password, user.password);

    console.log(validPassword)
    if(!validPassword) {
        return {
            message: "Invalid username or/and pasword",
            status: false
        };
    }

    return {
        status: true
    };
}
