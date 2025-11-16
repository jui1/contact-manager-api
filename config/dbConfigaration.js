const mongoose = require("mongoose")

const ConnectDb = async () => {
	try {
		const uri = process.env.MONGODB_URI || process.env.MONGO_URI
		if (!uri) {
			throw new Error("MONGODB_URI is not set in .env")
		}
		const dbName = process.env.MONGODB_DB 
		await mongoose.connect(uri)
		console.log("database connected")
	} catch (err) {
		console.log(err)
		process.exit(1)
	}
};

module.exports = ConnectDb;