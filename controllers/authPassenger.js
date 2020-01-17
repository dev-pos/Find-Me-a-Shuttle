const db = require("../models");
const env = require('dotenv');
const Passenger = db.Passenger;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

exports.signup = (req, res) => {
    // Passenger to Database
    Passenger.create({
        surName: req.body.surName,
        initials: req.body.initials,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    })
        .then(Passenger => {
                    res.send({ message: "Passenger was registered successfully!" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

exports.signin = (req, res) => {
    Passenger.findOne({
        where: {
            email: req.body.email
        }
    })
        .then(passenger => {
            if (!passenger) {
                return res.status(404).send({ message: "User Not found." });
            }

            var passwordIsValid = bcrypt.compareSync(
                req.body.password,
                passenger.password
            );

            if (!passwordIsValid) {
                return res.status(401).send({
                    accessToken: null,
                    message: "Auth Failed!!, Invalid Password!"
                });
            }

            var token = jwt.sign({ id: passenger.id }, env.secret, {
                expiresIn: 86400 // 24 hours
            });
            res.status(200).send({
                id: passenger.id,
                surName: passenger.surName,
                email: passenger.email,
                accessToken: token
            });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};