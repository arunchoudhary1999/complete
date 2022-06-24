const express = require("express");

const UserController = require("../controllers/UserController");
const checkAuth = require("../middlewares/check-auth");

const router = express.Router();
 
// router.post("/signup", checkAuth, UserController.signup);
router.post("/signup", UserController.signup);
router.post("/login", UserController.login);
router.get("/:userId", checkAuth, UserController.getOneUser);

module.exports = router;
