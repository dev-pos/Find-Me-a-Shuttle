const bcrypt = require("bcrypt");
bcrypt.hash('1234', 10, function(err, hash) {
    console.log(hash)
  });