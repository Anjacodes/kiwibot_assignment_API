const { db } = require("../utils/admin");

exports.get_delivery_byID = async (req, res) => {
  const delivery = db.collection('deliveries').doc(req.params.delivery_id);

  try{
    let item = await delivery.get();
    let response = item.data();
    return res.status(200).send(response);
  } catch(error) {
    console.log(error)
    return res
    .status(500)
    .json({ general: "Something went wrong, please try again" });
  }
};