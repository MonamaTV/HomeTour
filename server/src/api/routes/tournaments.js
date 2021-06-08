const express = require("express");
const { createTournament, 
        getTournaments, 
        getTournament, 
        getTournamentBySponsor, 
        updateTournament, 
        deleteTournament } = require("../controllers/tournaments");

const router = express.Router();

//@route GET
//@desc gets all the latest public tournaments
router.get("/", getTournaments);

//@route GET/:id
//@desc Gets the tournament by ID
router.get("/:id", getTournament);

//@route GET/:sponsorID/:tournamentID
//@desc Get the tournament under this sponsor
router.get("/:sponsorID/:tournamentID", getTournamentBySponsor);

//@route POST
//@desc a sponsor with a valid ID gets to add a tournament
router.post("/", createTournament);

//@route PATCH/:id
//@desc Updates the tournament with more details
router.patch("/:id", updateTournament);

//@route DELETE/:id
//@desc deletes the tournament (change live to false)
router.delete("/:id", deleteTournament);

module.exports = router;