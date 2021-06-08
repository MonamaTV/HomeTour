//Express JS App(Web API)
const express = require("express");
const app = express(); 

//Cross Origin Resource Sharing 
const cors = require("cors");

//Environment variables configuration
const dotenv = require("dotenv");
dotenv.config();

//Route imports
const sponsorRouter = require("./api/routes/sponsors");
const teamsRouter = require("./api/routes/teams");
const tournamentRouter = require("./api/routes/tournaments");

//Database configuration
const databaseConfiguration = require("./config/database");

//Midlewares
app.use(express.json());
app.use(cors());

//Root routes
app.get("/", (req, res) => {
    res.send("We are home");
});

//Route middlewares
app.use("/api/teams", teamsRouter);
app.use("/api/sponsors", sponsorRouter);
app.use("/api/sponsors/tournaments", tournamentRouter);

//Server listens on PORT
app.listen(process.env.PORT, err => {

    if(err) throw err;

    console.log("The server is running...");

    databaseConfiguration;
});

