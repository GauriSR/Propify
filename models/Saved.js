const mongoose = require("mongoose");

const savedSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property"
  }
});

module.exports = mongoose.model("Saved", savedSchema);