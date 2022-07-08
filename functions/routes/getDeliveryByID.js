const {db} = require("../utils/admin");

exports.getDeliveryByID = async (req, res) => {
  const delivery = db.collection("deliveries").doc(req.params.delivery_id);

  try {
    const item = await delivery.get();
    const response = item.data();
    return res.status(200).send(response);
  } catch (error) {
    return res
        .status(500)
        .json({general: "Something went wrong, please try again"});
  }
};
