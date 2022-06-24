const Language = require("../models/LanguageModel");
const mongoose = require("mongoose");

const getOneLanguage = async (req, res, next) => {
  const id = req.params.languageId;
  try {
    const language = await Language.findById(id);
    res.status(200).json(language);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllLanguages = async (req, res, next) => {
  try {
    const languages = await Language.find({});
    res.status(200).json(languages);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const addLanguage = async (req, res, next) => {
  const language = new Language({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    level: req.body.level,
  });

  try {
    await language.save();
    res.status(201).json(language);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteLanguage = async (req, res, next) => {
  const id = req.params.languageId;
  try {
    await Language.deleteOne({ _id: id });
    res.status(200).json({ message: "Language deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateLanguage = async (req, res, next) => {
  const id = req.params.languageId;
  mongoose.set('useFindAndModify', false);
  Language.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      level: req.body.level,
    },
    function (err, language) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(200)
          .json({ message: "Experience updated successfully", language });
      }
    }
  );
};

module.exports = {
  getOneLanguage,
  getAllLanguages,
  addLanguage,
  deleteLanguage,
  updateLanguage,
};
