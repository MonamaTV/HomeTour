const sponsors = require("../models/Sponsor");
const { update } = require("../models/Tournament");
const tournaments = require("../models/Tournament");
const { tournamentValidation } = require("../validations/schemaValidations");

module.exports.createTournament = async (req, res) => {

    const body = req.body;

    const tempTournament = {
        sponsorID: body.sponsorID,
        name: body.name,
        firstPrize: body.firstPrize,
        secondPrize: body.secondPrize,
        description: body.description,
        endDate: body.endDate,
        startDate: body.startDate,
        numberOfTeams: body.numberOfTeams,
        joiningFee: body.joiningFee,
        location: body.location,
        public: body.public,
        active: body.active
    };

    const validateResults = tournamentValidation(tempTournament);

    if(validateResults.error) {
        return res.status(400).send({
            message: "Could not create tournament",
            code: 400
        });
    }

    //For some weird reason, I do not trust my work... so I am gonna validate if the user of this ID exists, if not ... then why create a tournament?
    const verifySponsor = await sponsors.findById({_id: tempTournament.sponsorID});
    if(!verifySponsor) {
        return res.status(401).send({
            message: "User not authorised to create a tournament",
            code: 401
        })
    }
    const tournament = new tournaments({
        ...tempTournament,
        paidTeams: []
    });

    try {
        const savedTournament = await tournament.save();
        res.status(200).send({
            data: savedTournament,
            message: "Successfuly created a tournament",
            code: 200
        })
    } catch (error) {
        res.status(400).send({
            message: "Could not create tournament"
        })
    }

}

module.exports.getTournaments = async (req, res) => {

    const { fromDate, toDate } = req.query;

    try {
        //add the public: true
        const publicTournaments =  await tournaments.find({}, {sponsorID: 0}).sort({createdAt: 1});
        res.status(200).send({
            tournaments: publicTournaments,
            message: "The latest tournaments available to the public",
            code: 200
        });
    } catch (error) {
        res.status(400).send({
            message: "Could not find public tournaments",
            code: 400
        });
    }
};

//Does not need to be protected because
module.exports.getTournament = async (req, res) => {
    const { id } = req.params;
    console.log(id)

    if(!id) {
        return res.status(400).send({
            message: "Invalid information provided",
            code: 400
        });
    }

    try {
        const tournament = await tournaments.findOne({_id: id});
        console.log(tournament)
        res.status(200).send({
            data: tournament,
            message: "Successful find operation",
            code: 200
        })
    } catch (error) {
        return res.status(400).send({
            message: "Unsuccessful find operation",
            code: 400
        });
    }
};
//Protected route - only available to logged in sponsors
module.exports.getTournamentBySponsor = async (req, res) => {

    const { sponsorID, tournamentID } = req.params;

    if(!sponsorID || !tournamentID) {
        return res.status(400).send({
            message: "Invalid information provided",
            code: 400
        });
    }

    try {
        const tournament = await tournaments.findOne({_id: tournamentID, sponsorID: sponsorID});
        res.status(200).send({
            data: tournament,
            message: "Successful find operation",
            code: 200
        })
    } catch (error) {
        return res.status(400).send({
            message: "Unsuccessful find operation",
            code: 400
        });
    }
};
//Protected route
module.exports.updateTournament = async (req, res) => {
    const body = req.body;

    const { id } = req.params;
    const tournament = await tournaments.findOne({_id: id, sponsorID: body.sponsorID});

    if(!tournament) {
        return res.status(400).send({
            message: "Unsuccessful update operation",
            code: 400
        });
    }

    try {
        const update = await tournament.updateOne({
            "$set": {
                ...body
            }
        }, {
            upsert: true
        });
        if(update?.ok === 1) {
            res.status(200).send({
                message: "Successful update operation",
                code: 400
            });
        }
        else {
            res.status(400).send({
                message: "Unsuccessful update operation",
                code: 400
            });
        }
    } catch (error) {
        res.status(400).send({
            message: "Unsuccessful update operation",
            code: 400
        });
    }

};

module.exports.deleteTournament = async (req, res) => {

    const { id } = req.params;
    const sponsorID = "6096c1c925dd3f29ec680ebc";
    try {
        const tournament = await tournaments.findOne({_id: id, sponsorID});
        //If we do not find one then there is no tournament to edit
        if(!tournament) {
            return res.status(400).send({
                message: "Unsuccessful delete operation",
                code: 400
            });
        }
        //Change the public and active properties to false
        const update = await tournament.updateOne({
            "$set": {
                active: false,
                public: false,
            }
        });
        //If
        if(update?.ok === 1) {
            res.status(200).send({
                message: "Successful delete operation",
                code: 200
            });
        }
        else {
            res.status(400).send({
                message: "Unsuccessful delete operation",
                code: 400
            });
        }

    } catch (error) {
        res.status(400).send({
            message: "Unsuccessful delete operation",
            code: 400
        });
    }
};
