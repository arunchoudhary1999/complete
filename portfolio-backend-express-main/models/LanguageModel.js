const mongoose = require("mongoose");

const languageSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, required: true },
  level: { type: String, required: true },
});

module.exports = mongoose.model("Language", languageSchema);
