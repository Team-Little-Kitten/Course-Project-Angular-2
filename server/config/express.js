const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const passportConfig = require("./passport");
const expressSession = require("express-session");
const cors = require("cors");

const rootPath = path.join(__dirname, "/../../");

module.exports = () => {
    let app = express();

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
        res.setHeader("Access-Control-Allow-Credentials", true);
        next();
    });
    app.options("*", cors());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(expressSession({
        secret: "noissessserpxe",
        resave: true,
        saveUninitialized: true
    }));
    app.use(express.static(path.join(rootPath, "dist")));
    passportConfig(app);
    return app;
};
