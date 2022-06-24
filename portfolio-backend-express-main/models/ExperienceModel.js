const mongoose = require("mongoose");

const experienceSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  company: { type: String, required: true },
  city: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  description: { type: String, required: true },
  technologies: { type: String, required: true },
});

module.exports = mongoose.model("Experience", experienceSchema);
