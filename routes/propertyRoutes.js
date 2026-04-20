const express = require("express");
const router = express.Router();
const Property = require("../models/Property");

// ADD PROPERTY (Seller)
router.post("/add", async (req, res) => {
  try {
    const property = new Property({
      ...req.body,
      seller: req.body.userId // pass from frontend
    });

    await property.save();
    res.status(201).json(property);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET ALL PROPERTIES (with seller info)
router.get("/", async (req, res) => {
  try {
    const properties = await Property.find()
      .populate("seller", "name email");

    res.json(properties);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


const auth = require("../middleware/auth");

router.post("/add", auth, async (req, res) => {
  try {
    const property = new Property({
      ...req.body,
      seller: req.user.id
    });

    await property.save();
    res.json(property);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;