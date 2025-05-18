const express = require("express");
const { resisterUser } = require("../controllers/userController");

const router = express.Router();

router.post("/register", resisterUser)


router.post("/login", (req, res) => {
      res.json({message:"Login User"})
})
router.get("/current", (req, res) => {
      res.json({message:"Current User Info"})
})


module.exports = router


