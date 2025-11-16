const express = require("express");

const router = express.Router();

router.post("/register" ,(res,req) =>{
    res.json({message :"Reguister you acciount "})
});


router.post("/login" ,(res,req) =>{
    res.json({message :"Reguister you acciount "})
})



router.post("/current" ,(res,req) =>{
    res.json({message :"Reguister you acciount "})
})


module.exports = router;