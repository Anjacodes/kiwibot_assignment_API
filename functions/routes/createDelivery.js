const {db} = require("../utils/admin");

exports.createDelivery = async (req, res) => {
  const {pickup, dropoff, zoneId, status} = req.body;
  const id = Math.random().toString(36);
  const date = Date.now();
  const deliveriesRef = db.collection("deliveries");

  try {
    deliveriesRef.doc().set({
      "pickup": pickup,
      "dropoff": dropoff,
      "zone_id": zoneId, // eslint-disable-line
      "status": status,
      "creation_date": date, // eslint-disable-line
      "id": id,
    })
        .then(() => {
          res.send("Delivery created successfully");
        });
  } catch (error) {
    return res
        .status(500)
        .json({general: "Something went wrong, please try again"});
  }
};
