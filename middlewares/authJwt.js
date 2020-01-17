const jwt = require("jsonwebtoken");
const env = require('dotenv');
const db = require("../models");
const Driver = db.Driver;

verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }

  jwt.verify(token, env.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    next();
  });
};


const authJwt = {
  verifyToken: verifyToken,
};
module.exports = authJwt;