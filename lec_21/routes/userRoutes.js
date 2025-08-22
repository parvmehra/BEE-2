const express = require("express");
const router = express.Router();
const registerFunc = require("../controllers/userControllers.js").registerFunc;
const loginFunc = require("../controllers/userControllers.js").loginFunc;


router.post("/login",loginFunc);

router.post("/register",registerFunc);

module.exports = router;