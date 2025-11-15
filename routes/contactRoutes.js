const express = require("express");
const router = express.Router();
const  {getcontract }  = require("../controllers/contractController");
const { create}  = require("../controllers/contractController");

const {update } = require("../controllers/contractController");
const {getdelete} = require("../controllers/contractController");
const {getid} = require("../controllers/contractController");


router.get("/", getcontract);


router.post("/" ,  create );

router.put("/:id" , update );

router.delete("/:id" ,getdelete);

router.get("/:id" ,getid );


module.exports =  router;