const { db } = require("../utils/admin");

exports.create_bot = async (req, res) => {
  const { location, status, zone_id } = req.body;
  const id = Math.random().toString(36);
  const botsRef = db.collection('bots');

  try{
    botsRef.doc().set({
      "location": location,
      "zone_id" : zone_id,
      "status": status,
      "id": id
    })
    .then(() => {
        res.send('Bot created successfully');
    });
  } catch(error) {
    return res
    .status(500)
    .json({ general: "Something went wrong, please try again" });
  }
};