const Experience = require("../models/ExperienceModel");
const mongoose = require("mongoose");

const getOneExperience = async (req, res, next) => {
  const id = req.params.experienceId;
  try {
    const experience = await Experience.findById(id);
    res.status(200).json(experience);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllExperiences = async (req, res, next) => {
  try {
    const experiences = await Experience.find({});
    res.status(200).json(experiences);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const addExperience = async (req, res, next) => {
  const experience = new Experience({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    company: req.body.company,
    city: req.body.city,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    description: req.body.description,
    technologies: req.body.technologies,
  });

  try {
    await experience.save();
    res.status(201).json(experience);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteExperience = async (req, res, next) => {
  const id = req.params.experienceId;
  try {
    await Experience.deleteOne({ _id: id });
    res.status(200).json({ message: "Experience deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateExperience = async (req, res, next) => {
  const id = req.params.experienceId;
  mongoose.set('useFindAndModify', false);
  Experience.findByIdAndUpdate(
    id,
    {
      title: req.body.title,
      company: req.body.company,
      city: req.body.city,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      description: req.body.description,
      technologies: req.body.technologies,
    },
    function (err, experience) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(200)
          .json({ message: "Experience updated successfully", experience });
      }
    }
  );
};

module.exports = {
  getOneExperience,
  getAllExperiences,
  addExperience,
  deleteExperience,
  updateExperience,
};
