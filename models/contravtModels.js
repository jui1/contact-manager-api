const mongoose = require("mongoose");



const contractSchema = mongoose.Schema({
 
    name :{
        type : String ,
        required:  [true, "Please add the contact name"],
        trim: true
    },
    email :{
        type : String ,
     required: [true, "Please add the contact email"],
        trim: true,
        lowercase: true
    },
    phone :{
        type : String ,
        required: [true, "Please add the contact phone"],
        trim: true
    },
    company :{
        type : String ,
        required: [true, "Please add the contact company"],
        trim: true
    },
 
 
},

{ timestamps: true },

);


// mongoose.exports = mongoose.Schema("Contact" ,  contractSchema );

module.exports = mongoose.model("Contact", contractSchema);
