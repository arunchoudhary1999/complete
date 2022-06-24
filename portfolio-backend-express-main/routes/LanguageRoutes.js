const express = require("express");

const LanguageController = require("../controllers/LanguageController");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();

router.post("/", checkAuth, LanguageController.addLanguage);
router.get("/:languageId", LanguageController.getOneLanguage);
router.get("/", LanguageController.getAllLanguages);
router.delete("/:languageId", checkAuth, LanguageController.deleteLanguage);
router.put("/:languageId", checkAuth, LanguageController.updateLanguage);

module.exports = router;
