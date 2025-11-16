const asyncHandler = require("express-async-handler");
const  Contact = require("../models/contravtModels");


const getcontract = asyncHandler(async(req, res) => {
    const contracts =  await Contact.find();
  res.status(200).json(contracts );
});

const create = asyncHandler(async(req, res , next) => {
  console.log("Received body:", req.body);
  const { name, email, phone, company } = req.body;
  if (!name || !email || !phone || !company) {
    res.status(400);
    return next(new Error("All fields are mandatory"));
  }
  const contact  = await Contact.create({
    name,
    email,
    phone,
    company
  });
    res.status(201).json(contact);
});

const update = asyncHandler(async(req, res) => {
  const { id } = req.params;
  const { name, email, phone, company } = req.body;
  const updated = await Contact.findByIdAndUpdate(
    id,
    { name, email, phone, company },
    { new: true, runValidators: true }
  );
  if (!updated) {
    return res.status(404).json({ message: "Contact not found" });
  }
  res.status(200).json(updated);
});

const getdelete = asyncHandler(async(req, res) => {
  const { id } = req.params;
  const deleted = await Contact.findByIdAndDelete(id);
  if (!deleted) {
    return res.status(404).json({ message: "Contact not found" });
  }
  res.status(200).json(deleted);
});

const getid = asyncHandler(async(req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (!contact) {
    return res.status(404).json({ message: "Contact not found" });
  }
  res.status(200).json(contact);
});

module.exports = { getcontract, create, update, getdelete, getid };
