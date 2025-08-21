const express = require("express");
const router = express.Router();
const isLogin = require("../middleware/middleware").isLogin;
router.use(isLogin);
router.get("/", (req, res) => {
    res.json({
        success: true,
        message: "all blogs"
    });
})

router.get("/:id", (req, res) => {
    res.json({
        success: true,
        message: "single blog fetched"
    });
})

router.post('/',(req,res)=>{
    res.json({
        success: true,
        message: "blog created"
    });
})

module.exports = router;