const getcontract = (req, res) => {
  res.status(200).json({ message: "Get all the contract" });
};

const create = (req, res) => {
  console.log("Received body:", req.body);
  const { name, email, phone, company } = req.body;
  if (!name || !email || !phone || !company) {
    return res.status(400).json({ error: "All fields are mendatory" });
  }

  res.status(201).json({ message: "Contract created successfully !" });
};

const update = (req, res) => {
  res
    .status(200)
    .json({
      message: `yes contract the update and the id is ${req.params.id} `,
    });
};

const getdelete = (req, res) => {
  res
    .status(200)
    .json({ message: `yess its deletee and the id is ${req.params.id}` });
};

const getid = (req, res) => {
  res
    .status(200)
    .json({ message: `yess its contract and the id is ${req.params.id}` });
};

module.exports = { getcontract, create, update, getdelete, getid };
