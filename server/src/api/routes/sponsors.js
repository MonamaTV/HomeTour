const express = require("express");
const router = express.Router();

const { loginSponsor, registerSponsor } = require("../controllers/sponsors");

//Post the login details
router.post("/login", loginSponsor);

router.post("/register", registerSponsor);

module.exports = router;