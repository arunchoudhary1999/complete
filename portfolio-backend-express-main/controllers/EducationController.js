const Education = require("../models/EducationModel");
const mongoose = require("mongoose");

const getOneEducation = async (req, res, next) => {
  const id = req.params.educationId;
  try {
    const education = await Education.findById(id);
    res.status(200).json(education);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllEducations = async (req, res, next) => {
  try {
    const educations = await Education.find({});
    res.status(200).json(educations);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const addEducation = async (req, res, next) => {
  const education = new Education({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    school: req.body.school,
    city: req.body.city,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  });

  try {
    await education.save();
    res.status(201).json(education);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateEducation = async (req, res, next) => {
  const id = req.params.educationId;
  mongoose.set("useFindAndModify", false);
  Education.findByIdAndUpdate(
    id,
    {
      title: req.body.title,
      school: req.body.school,
      city: req.body.city,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    },
    function (err, education) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({
          message: "Education updated successfully",
          education: education,
        });
      }
    }
  );
};

const deleteEducation = async (req, res, next) => {
  const id = req.params.educationId;
  try {
    await Education.deleteOne({ _id: id });
    res.status(200).json({ message: "Education deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

module.exports = {
  getOneEducation,
  getAllEducations,
  addEducation,
  deleteEducation,
  updateEducation,
};
