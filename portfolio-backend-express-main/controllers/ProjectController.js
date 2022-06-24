const Project = require("../models/ProjectModel");
const mongoose = require("mongoose");

const getOneProject = async (req, res, next) => {
  const id = req.params.projectId;
  try {
    const project = await Project.findById(id);
    res.status(200).json(project);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllProjects = async (req, res, next) => {
  try {
    const projects = await Project.find({});
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: err });
  }
};

const addProject = async (req, res, next) => {
  console.log(req.file);
  const project = new Project({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    description: req.body.description,
    technologies: req.body.technologies,
    haveLink: req.body.haveLink,
    link: req.body.link,
    projectImage: req.file.path,
  });

  try {
    await project.save();
    res.status(201).json(project);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const deleteProject = async (req, res, next) => {
  const id = req.params.projectId;
  try {
    await Project.deleteOne({ _id: id });
    res.status(200).json({ message: "Project deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const updateProject = async (req, res, next) => {
  const id = req.params.projectId;
   var projectSearch;
  try {
    projectSearch = await Project.findById(id);
  } catch (err) {
    res.status(500).json({ error: err });
  }
  var filePath;
  if (req.file === undefined) {
    filePath = projectSearch.projectImage;
  } else {
    filePath = req.file.path;
  }

  mongoose.set("useFindAndModify", false);
  Project.findByIdAndUpdate(
    id,
    {
      title: req.body.title,
      description: req.body.description,
      technologies: req.body.technologies,
      haveLink: req.body.haveLink,
      link: req.body.link,
      projectImage: filePath,
    },
    { new: true },
    function (err, project) {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res
          .status(200)
          .json({ message: "Project updated successfully", project });
      }
    }
  );
};

module.exports = {
  getOneProject,
  getAllProjects,
  addProject,
  deleteProject,
  updateProject,
};
