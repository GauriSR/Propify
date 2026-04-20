const express = require("express");
const router = express.Router();

const { registerUser, loginUser } = require("../controllers/userController");

router.post("/signup", registerUser);
router.post("/login", loginUser); // ✅ MUST be there

module.exports = router;