const {db} = require("../utils/admin");

exports.deliveries = async (req, res) => { // eslint-disable-line
  const deliveriesRef = db.collection("deliveries");

  try {
    deliveriesRef.get().then((snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(data);
      return res.status(201).json(data);
    });
  } catch (error) {
    return res
        .status(500)
        .json({general: "Something went wrong, please try again"});
  }
};
