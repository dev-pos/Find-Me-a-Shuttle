const db = require("../models");
require('dotenv').config();
const Driver = db.Driver;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.signup = (req, res) => {
    // Driver to Database
    User.create({
        surName: req.body.surName,
        initials: req.body.initials,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
        .then(user => {
                    res.send({ message: "User was registered successfully!" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.signin = (req, res) => {
    console.log(req.body);
    Driver.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(driver => {
            if (!driver) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                driver.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Auth Failed!!, Invalid Password!"
                });
            }

            var token = jwt.sign({ id: driver.id }, process.env.secret, {
                expiresIn: 86400 // 24 hours
            });
            res.status(200).send({
                id: driver.id,
                surName: driver.surName,
                email: driver.email,
                accessToken: token
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};