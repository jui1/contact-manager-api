const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json()); 
let port = parseInt((process.env.PORT || '3001').toString().replace(/[; ]/g, '')) || 3001;
if (port === 5000) port = 3001;
const connectDb = require("./config/dbConfigaration");
app.use("/api/contacts" , require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(require("./middleware/errorHandler"));
(async () => {
	try {
		await connectDb();
		app.listen(port ,() =>{
		    console.log(`server runing at ${port}`);
		});
	} catch (err) {
		console.error("Failed to start server", err);
		process.exit(1);
	}
})();