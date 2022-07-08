const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors({origin: true}));
app.use(express.json());

const {deliveries} = require("./routes/deliveries");
const {createDelivery} = require("./routes/createDelivery");
const {bots} = require("./routes/bots");
const {createBot} = require("./routes/createBot");
const {getDeliveryByID} = require("./routes/getDeliveryByID");

app.get("/hello-world", (req, res) => {
  return res.status(200).send("Hello World!");
});
app.get("/api/deliveries", deliveries);
app.get("/api/deliveries/:delivery_id", getDeliveryByID);
app.post("/api/create_delivery", createDelivery);

app.get("/api/bots", bots);
app.post("/api/create_bot", createBot);

exports.app = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
