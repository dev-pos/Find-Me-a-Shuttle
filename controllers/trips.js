const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../models');

module.exports = {
    getToday: function (req, res, next) {
        return db.Trip.findAll({
            where: {
                completed: {
                    [Op.eq]: 0
                }
            }
        })
            .then((trips) => res.send(trips))
            .catch((err) => {
                console.log('There was an error querying trips', JSON.stringify(err))
                return res.send(err);
            });
    },
    getById: function (req, res, next) {
        return db.Trip.findAll({
            where: {
                id: {
                    [Op.eq]: req.params.tripId
                }
            }
        })
            .then((trips) => res.send(trips))
            .catch((err) => {
                console.log('There was an error querying trips', JSON.stringify(err))
                return res.send(err);
            });
    },
    getAll: function (req, res, next) {
        return db.Trip.findAll({
            include: [{
                model: db.Bus,
            }]
        })
            .then((trips) => res.send(trips))
            .catch((err) => {
                console.log('There was an error querying trips', JSON.stringify(err));
                return res.send(err);
            });
    },
    getByLoc: function (req, res, next) {
        return db.Trip.findAll({
            where: {
                startLoc: req.params.loc1,
                endLoc: req.params.loc2
            }
        })
            .then((trips) => res.send(trips))
            .catch((err) => {
                console.log('There was an error querying trips', JSON.stringify(err));
                return res.send(err);
            });
    },
    create: function (req, res, next) {
        const { startDateTime, startLoc, endLoc } = req.body;
        return db.Trip.create({ startDateTime, startLoc, endLoc })
            .then((trip) => res.send(trip))
            .catch((err) => {
                console.log('There was an error creating a trip', JSON.stringify(trip));
                return res.status(400).send(err);
            });
    },
};