const express = require("express");
const router = express.Router();
const Saved = require("../models/Saved");

// Save property
router.post("/save", async (req, res) => {
  try {
    const saved = new Saved(req.body);
    await saved.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get saved properties
router.get("/:userId", async (req, res) => {
  try {
    const saved = await Saved.find({ user: req.params.userId })
      .populate("property");

    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;