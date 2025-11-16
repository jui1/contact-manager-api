const express = require("express")
const router = express.Router()
const { listUsers, getUserById, registerUser } = require("../controllers/userController")

router.get("/", listUsers)
router.get("/:id", getUserById)
router.post("/register", registerUser)

module.exports = router


