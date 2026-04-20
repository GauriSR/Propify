const mongoose = require("mongoose");

const interestSchema = new mongoose.Schema({
  property: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Property"
  },
  buyer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  message: String
}, { timestamps: true });

module.exports = mongoose.model("Interest", interestSchema);