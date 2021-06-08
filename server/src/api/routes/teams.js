const express = require("express");
const { registerTeam, loginTeam, deactivateTeam, tournamentsJoined } = require("../controllers/teams");

const router = express.Router();



//@route GET/tournaments/joined
//@desc Get the tournaments the team has joined
router.get("/tournaments/joined", tournamentsJoined); 

//@route POST/login
//@desc Team logs in
router.post("/login", loginTeam);

//@route POST/register
//@desc Registering a new team
router.post("/register", registerTeam);

//@route DELETE/:id
//@desc it deactivates the team
router.delete("/:id", deactivateTeam);


module.exports = router;

