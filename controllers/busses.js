const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../models');

module.exports = {
    getById: function (req, res, next) {
        return db.Bus.findAll({
            where: {
                id: {
                    [Op.eq]: req.params.busId
                }
            }
        })
            .then((busses) => res.send(busses))
            .catch((err) => {
                console.log('There was an error querying busses', JSON.stringify(err))
                return res.send(err);
            });
    },
    getAll: function (req, res, next) {
        return db.Bus.findAll()//TODO: Sort the list by bus id
            .then((busses) => res.send(busses))
            .catch((err) => {
                console.log('There was an error querying busses', JSON.stringify(err));
                return res.send(err);
            });
    },
    // create: function (req, res, next) {
    //     const { startDateTime, startLoc, endLoc } = req.body;
    //     return db.Trip.create({ startDateTime, startLoc, endLoc })
    //         .then((trip) => res.send(trip))
    //         .catch((err) => {
    //             console.log('There was an error creating a trip', JSON.stringify(trip));
    //             return res.status(400).send(err);
    //         });
    // },
};