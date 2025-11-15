const express = require("express");
const dotenv = require("dotenv").config();
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json()); 
const port = parseInt((process.env.PORT || 3001));
app.use("/api/contacts" , require("./routes/contactRoutes"));
app.listen(port ,() =>{
    console.log(`server runing at ${port}`);
});