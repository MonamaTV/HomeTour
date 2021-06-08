/*Teams can register(and deactivating their profile), login, join a tournament, 
* see the previous tournaments they have joined, 
* see the results of the previous games, 
* check their upcoming games(this includes location, time and date)
* If the tournament is by invite, the team invited can reject the invite
* 
*/

const teams = require("../models/Team");
const bcrypt = require("bcrypt");
const { loginForSponsorsAndTeams } = require("../helpers/login");
const { teamValidation } = require("../validations/schemaValidations");
const tournaments = require("../models/Tournament");
const ObjectId = require("mongodb").ObjectId;
const results = require("../models/Results");

module.exports.loginTeam = async (req, res) => {
    
    const {email, password } = req.body;

    const loginResults = await loginForSponsorsAndTeams(teams, email, password);

    if(!loginResults.status) {
        return res.send({
            message: loginResults.message,
            code: 400
        })
    }
    //Login is a success then do what you want specifically for this route
}

module.exports.registerTeam = async (req, res) => {

    const body = req.body;

    const tempTeam = {
        name: body.name,
        email: body.email,
        password: body.password,
        telephone: body.telephone,
        captain: body.captain,
        manager: body.manager
    };

    const validResults = teamValidation({
        ...tempTeam
    });
   
    if(validResults.error) {
        return res.status(400).send({
            message: "Invalid information provided",
            code: 400
        });
    }

    const findTeam = await teams.findOne({email: tempTeam.email});

    if(findTeam) {
        return res.status(400).send({
            message: "Team already exists",
        });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(tempTeam.password, salt);

    
    try {

        const newTeam = new teams({
            name: tempTeam.name,
            manager: tempTeam.manager,
            email: tempTeam.email,
            password: hashedPassword,
            telephone: tempTeam.telephone,
            captain: tempTeam.captain,
            active: true
        });

        const savedTeam = await newTeam.save();
        
        res.status(200).send({
            data: savedTeam,
            message: "Successfully created a team",
            code: 200
        });
    } catch (error) {
        res.status(400).send({
            message: "Failed to created a team",
            code: 400
        });
    }
};
//Instead of deleting the team, we just deactivate it
module.exports.deactivateTeam = async (req, res) => {

    const { id } = req.params;
    //Actually the id must come from the session id

    if(!id) {
        return res.status(400).send({
            message: "Team does not exist",
            code: 400 
        });
    }

    try {
        const findTeam = await teams.updateOne({_id: id}, {
            "$set": {
                active: false
            }
        });

        if(findTeam?.n === 1) {
            res.status(200).send({
                message: "Successfully deleted the team",
                code: 200 
            })
        }
        else {
            res.status(200).send({
                message: "Failed to the team",
                code: 200 
            })
        }
        //Deactivating the team, delete the session id and log them out
        
    } catch (error) {
        res.status(400).send({
            message: "Team does not exist",
            code: 400 
        });
    }
};

module.exports.joinTournament = async (req ,res) => {
    //This involves paying
};
//Tournaments team has participated or to participate in
module.exports.tournamentsJoined = async (req, res) => {

    const id = "609e72f9e0abe22f10607ac7"
    
    if(!id) {
        return res.status(401).send({
            message: "Invalid information provided",
            code: 401
        })
    }

    try {

        const tempTournaments = await tournaments.find({
           "paidTeams.id": id 
        }).sort({startDate: 1});
        
        res.status(200).send({
            data: tempTournaments,
            message: "Tournaments you participated in",
            code: 200
        });
        
    } catch (error) {
        res.status(400).send({
            message: "Could not find your tournaments",
            code: 400
        })
    }
};
//The tournaments team has participated
module.exports.seePreviousTournamentsResults = async (req, res) => {

    const id = "609e72f9e0abe22f10607ac7"
    //Without the ID, we cannot proceed anywhere
    if(!id) {
        return res.status(401).send({
            message: "Invalid information provided",
            code: 401
        })
    }

    try {
        //So basically, you find tournament where you have paid and the end date(of the tournament) is less than today
        //This means the tournament is already done. Because end date has already passed
        const tempTournaments = await tournaments.find({
           "$and": [
                { "paidTeams.id": id },
                { endDate: {$lt: Date.now()} }
           ]
        }).sort({startDate: 1});

        res.status(200).send({
            data: tempTournaments,
            message: "Tournaments you participated in",
            code: 200
        });
    } catch (error) {
        res.status(400).send({
            message: "Could not find your tournaments",
            code: 400
        });
    }
};
//See upcoming tournaments
module.exports.seeUpcomingTournaments = async (req, res) => {

    const id = "609e72f9e0abe22f10607ac7"
    
    if(!id) {
        return res.status(401).send({
            message: "Invalid information provided",
            code: 401
        });
    }

    try {
        //Similar to the previous tournaments, but here the start date has not been reached, therefore it means it's still an upcoming tournament
        const tempTournaments = await tournaments.find({
           "$and": [
                { 
                    "paidTeams.id": id
                },
                { startDate: {
                        $gt: Date.now()
                    }
                }
           ]
        }).sort({startDate: 1});

        res.status(200).send({
            data: tempTournaments,
            message: "Tournaments you participated in",
            code: 200
        });
        
    } catch (error) {
        res.status(400).send({
            message: "Could not find your tournaments",
            code: 400
        });
    }
};
//See the tournaments with unresponded invites. This only applies to tournaments that are by invites
module.exports.seeAwaitingTournaments = async (req, res) => {

}

module.exports.seeResultsOfTournament = async (req, res) => {

    const { tournamentID } = req.params;
    const id = "609e72f9e0abe22f10607ac7";

    if(!tournamentID) {
        return res.status(400).send({
            message: "Invalid information provided",
            code: 400
        });
    }

    try {
        const matchResults = await results.find({
            "$and": [
                { tournamentID: tournamentID },
                { "matches.teamA.id": id}
            ]
        });

        res.status(200).send({
            data: matchResults,
            message: "Match results for the tournament",
            code: 200
        });
    } catch (error) {
        return res.status(400).send({
            message: "Failed to find results for the tournament",
            code: 400
        });
    }

}