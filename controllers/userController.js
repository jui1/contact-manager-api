const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")

const listUsers = asyncHandler(async (req, res) => {
	const users = await User.find().select("-password")
	res.status(200).json(users)
})

const getUserById = asyncHandler(async (req, res) => {
	const user = await User.findById(req.params.id).select("-password")
	if (!user) return res.status(404).json({ message: "User not found" })
	res.status(200).json(user)
})

const registerUser = asyncHandler(async (req, res, next) => {
	const { name, email, password } = req.body
	if (!name || !email || !password) {
		res.status(400)
		return next(new Error("name, email, password are required"))
	}
	const exists = await User.findOne({ email })
	if (exists) {
		res.status(409)
		return next(new Error("Email already registered"))
	}
	const user = await User.create({ name, email, password })
	const created = user.toObject()
	delete created.password
	res.status(201).json(created)
})

module.exports = { listUsers, getUserById, registerUser }


