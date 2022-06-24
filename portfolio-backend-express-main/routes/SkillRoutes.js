const express = require("express");

const SkillController = require("../controllers/SkillController");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/", checkAuth, SkillController.addSkill);
router.get("/:skillId", SkillController.getOneSkill);
router.get("/", SkillController.getAllSkills);
router.delete("/:skillId", checkAuth, SkillController.deleteSkill);
router.put("/:skillId", checkAuth, SkillController.updateSkill);

module.exports = router;
