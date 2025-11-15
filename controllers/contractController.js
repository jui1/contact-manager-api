const getcontract = (req, res) =>{
    res.status(200).json({message: "Get all the contract"});
};

const create = (req , res) =>{
    res.status(200).json({message : "YES , create contract"});
};


const update =  (req , res) =>{
    res.status(200).json({message: `yes contract the update and the id is ${req.params.id} `});

};


const  getdelete = (req, res) =>{
    res.status(200).json({message : `yess its deletee and the id is ${req.params.id}`});
};


const getid =(req, res) =>{
    res.status(200).json({message : `yess its contract and the id is ${req.params.id}`});
};

module.exports = { getcontract ,  create  ,  update , getdelete , getid};
