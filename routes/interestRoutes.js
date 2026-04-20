const express = require("express");
const router = express.Router();
const Interest = require("../models/Interest");

// Buyer sends interest
router.post("/send", async (req, res) => {
  try {
    const interest = new Interest(req.body);
    await interest.save();
    res.status(201).json(interest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Seller sees interests
router.get("/seller/:id", async (req, res) => {
    try {
      const interests = await Interest.find()
        .populate({
          path: "property",
          match: { seller: req.params.id }
        })
        .populate("buyer", "name email");
  
      // remove null properties
      const filtered = interests.filter(i => i.property !== null);
  
      res.json(filtered);
  
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

module.exports = router;