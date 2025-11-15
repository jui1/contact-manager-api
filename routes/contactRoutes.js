const express = require("express");
const router = express.Router();

router.get( "/" , (req, res) =>{
    res.status(200).json({message: "Get all the contract"});
});


router.post("/" , (req , res) =>{
    res.status(200).json({message : "YES , create contract"});
});

router.put("/:id" , (req , res) =>{
    res.status(200).json({message: `yes contract the update and the id is ${req.params.id} `});

});

router.delete("/:id" , (req, res) =>{
    res.status(200).json({message : `yess its deletee and the id is ${req.params.id}`});
});

router.get("/:id" , (req, res) =>{
    res.status(200).json({message : `yess its contract and the id is ${req.params.id}`});
});


module.exports =  router;