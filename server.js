const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv');
const db = require('./models');
env.config();

const app = express();
var http = require('http').createServer(app);

var io = require('socket.io')(http);

app.use(bodyParser.json());
app.use(express.static(__dirname + '/static'));

app.use('/api/trips', require('./routes/trips'));

io.on('connection', (socket) => {
  socket.on('newLocation', (data) => {
    io.emit('locationUpdate', data.latlon);
    console.log(data.driverId);
  });
});


// console.log(routeCords[0][0]);

// app.get('/api/trips', (req, res) => {
//     if(req.query.day){
//         console.log(req.query);
//     }
//     return db.Trip.findAll({
//         include:[{
//             model: db.Bus,
//         }]
//     })
//         .then((trips) => res.send(trips))
//         .catch((err) => {
//             console.log('There was an error querying trips', JSON.stringify(err))
//             return res.send(err)
//         });
// });

// app.post('/api/contacts', (req, res) => {
//   const { firstName, lastName, phone } = req.body
//   return db.Contact.create({ firstName, lastName, phone })
//     .then((contact) => res.send(contact))
//     .catch((err) => {
//       console.log('***There was an error creating a contact', JSON.stringify(contact))
//       return res.status(400).send(err)
//     })
// });

// app.delete('/api/contacts/:id', (req, res) => {
//   const id = parseInt(req.params.id)
//   return db.Contact.findById(id)
//     .then((contact) => contact.destroy({ force: true }))
//     .then(() => res.send({ id }))
//     .catch((err) => {
//       console.log('***Error deleting contact', JSON.stringify(err))
//       res.status(400).send(err)
//     })
// });

// app.put('/api/contacts/:id', (req, res) => {
//   const id = parseInt(req.params.id)
//   return db.Contact.findById(id)
//   .then((contact) => {
//     const { firstName, lastName, phone } = req.body
//     return contact.update({ firstName, lastName, phone })
//       .then(() => res.send(contact))
//       .catch((err) => {
//         console.log('***Error updating contact', JSON.stringify(err))
//         res.status(400).send(err)
//       })
//   })
// });

http.listen(3000, () => {
  console.log('Server is up on port 3000');
});