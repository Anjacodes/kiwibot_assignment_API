const { db } = require("../utils/admin");

exports.create_delivery = async (req, res) => {
  const { pickup, dropoff, zone_id, status } = req.body;
  const id = Math.random().toString(36);
  const date = Date.now()
  const deliveriesRef = db.collection('deliveries');

  try{
    deliveriesRef.doc().set({
      "pickup" : pickup,
      "dropoff" : dropoff,
      "zone_id" : zone_id,
      "status": status,
      "creation_date": date,
      "id": id
    })
    .then(() => {
        res.send('Delivery created successfully');
    });
  } catch(error) {
    return res
    .status(500)
    .json({ general: "Something went wrong, please try again" });
  }
};