const mongoose = require("mongoose");

const skillsSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  type: { type: String, required: true },
  level: { type: Number, required: true },
});

module.exports = mongoose.model("Skills", skillsSchema);
