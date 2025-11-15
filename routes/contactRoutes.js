const express = require("express");
const router = express.Router();
const  {getcontract  , create , update , getdelete , getid}  = require("../controllers/contractController");
// const { create}  = require("../controllers/contractController");

// const {update } = require("../controllers/contractController");
// const {getdelete} = require("../controllers/contractController");
// const {getid} = require("../controllers/contractController");


router.get("/", getcontract);

router.get("/:id", getid);

router.post("/", create);

router.put("/:id", update);

router.delete("/:id", getdelete);


module.exports =  router;