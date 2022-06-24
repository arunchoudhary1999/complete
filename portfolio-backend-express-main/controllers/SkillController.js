const Skill = require("../models/SkillsModel");
const mongoose = require("mongoose");

const getOneSkill = async (req, res, next) => {
  const id = req.params.skillId;
  try {
    const skill = await Skill.findById(id);
    res.status(200).json(skill);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllSkills = async (req, res, next) => {
  try {
    const skills = await Skill.find({});
    res.status(200).json(skills);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const addSkill = async (req, res, next) => {
  const skill = new Skill({
    _id: new mongoose.Types.ObjectId(),
    type: req.body.type,
    level: req.body.level,
  });

  try {
    await skill.save();
    res.status(201).json(skill);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteSkill = async (req, res, next) => {
  const id = req.params.skillId;
  try {
    await Skill.deleteOne({ _id: id });
    res.status(200).json({ message: "Skill deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateSkill = async (req, res, next) => {
  const id = req.params.skillId;
  mongoose.set("useFindAndModify", false);
  Skill.findByIdAndUpdate(
    id,
    {
      type: req.body.type,
      level: req.body.level,
    },
    function (err, skill) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(200)
          .json({ message: "Project updated successfully", skill });
      }
    }
  );
};

module.exports = {
  getOneSkill,
  getAllSkills,
  addSkill,
  deleteSkill,
  updateSkill,
};
