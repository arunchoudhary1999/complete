const mongoose = require("mongoose");

const projectSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: { type: String, required: true },
  description: { type: String, required: true },
  technologies: { type: String, required: true },
  haveLink: { type: Boolean, required: true },
  link: { type: String },
  projectImage: { type: String, required: false },
});

module.exports = mongoose.model("Project", projectSchema);
