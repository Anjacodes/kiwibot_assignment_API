const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors({ origin: true }));
app.use(express.json())

const { deliveries } = require('./routes/deliveries')
const { create_delivery } = require('./routes/create_delivery')
const { bots } = require('./routes/bots')
const { create_bot } = require('./routes/create_bot');
const { get_delivery_byID } = require('./routes/get_delivery_byID')

app.get('/hello-world', (req, res) => {
  return res.status(200).send('Hello World!');
});
app.get('/api/deliveries', deliveries)
app.get('/api/deliveries/:delivery_id', get_delivery_byID)
app.post('/api/create_delivery', create_delivery)

app.get('/api/bots', bots)
app.post('/api/create_bot', create_bot)

exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
