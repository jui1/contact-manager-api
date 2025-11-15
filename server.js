const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

port =  process.env.PORT ||3001;

app.use("/api/contacts" , require("./routes/contactRoutes"));

app.listen(port ,() =>{
    console.log(`server runing at ${port}`);
});