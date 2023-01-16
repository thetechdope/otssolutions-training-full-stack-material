const getAllUsers = (req, res) => {
  res.send("<h1>All Users</h1>");
};

const getSpecificUser = (req, res) => {
  res.send(`<h1>Specific User : ${req.params.id}</h1>`);
};

const createUser = (req, res) => {
  res.send("<h1>POST API</h1>");
};

const updateSpecificUser = (req, res) => {
  res.send(`<h1>Update Specific User : ${req.params.id}</h1>`);
};

const deleteSpecificUser = (req, res) => {
  res.send(`<h1>Delete Specific User : ${req.params.id}</h1>`);
};

export {
  getAllUsers,
  getSpecificUser,
  createUser,
  updateSpecificUser,
  deleteSpecificUser,
};
