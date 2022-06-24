const express = require("express");

const EducationController = require("../controllers/EducationController");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/",checkAuth, EducationController.addEducation);
router.get("/:educationId", EducationController.getOneEducation);
router.get("/", EducationController.getAllEducations);
router.delete("/:educationId",checkAuth, EducationController.deleteEducation);
router.put("/:educationId",checkAuth, EducationController.updateEducation);

module.exports = router;
