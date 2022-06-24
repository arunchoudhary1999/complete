const express = require("express");

const ProjectController = require("../controllers/ProjectController");
const uploadMulter = require("../middlewares/multer");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post(
  "/",
  checkAuth,
  uploadMulter.single("projectImage"),
  ProjectController.addProject
);
router.get("/:projectId", ProjectController.getOneProject);
router.get("/", ProjectController.getAllProjects);
router.delete("/:projectId", checkAuth, ProjectController.deleteProject);
router.put(
  "/:projectId",
  checkAuth,
  uploadMulter.single("projectImage"),
  ProjectController.updateProject
);

module.exports = router;
