const jwt = require("jsonwebtoken");
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const db = require('./models');

const app = express();
var http = require('http').createServer(app);

var io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));

app.use('/api/trips', require('./routes/trips'));
app.use('/api/driver', require('./routes/drivers'));
app.use('/api/passenger', require('./routes/passengers'));
app.use('/api/locations', require('./routes/locations'));
app.use('/api/busses', require('./routes/busses'));

//event fired every time before a new client connects
//so we use it to authenticate users before they join to socket server
io.use((socket, next) => {
  //  console.log(socket.request._query);
    try {
      jwt.verify(socket.request._query.accessToken, process.env.secret);
      next()
  } catch(err) {
    // console.log('err')
    return next(new Error('Authentication error'));
  }
  // return next();
});

io.on('connection', (socket) => {
  socket.on('newLocation', (data) => {
    switch (data.driverId) {
      case 1:
        io.emit('locationUpdate1', data.latlon);
        break;
      case 2:
        io.emit('locationUpdate2', data.latlon);
        break;
      case 3:
        io.emit('locationUpdate3', data.latlon);
        break;
      case 4:
        io.emit('locationUpdate4', data.latlon);
        break;
      case 5:
        io.emit('locationUpdate5', data.latlon);
        break;
    }
  });
});
// console.log(process.env.secret)

http.listen(3000, () => {
  console.log('Server is up on port 3000');
});