const { response, request } = require("express");
const usersGet = (req = request, res = response) => {
  const { name } = req.query;
  res.json({
    msg: "get API controller",
    name,
  });
};
const usersPut = (req, res) => {
  const { id } = req.params;
  res.json({
    msg: "put API",
    id: id,
  });
};
const usersPost = (req, res) => {
  const { name, age } = req.body;
  res.json({
    msg: "post API",
    name,
    age,
  });
};
const usersDelete = (req, res) => {
  res.json({
    msg: "delete API",
  });
};
module.exports = {
  usersGet,
  usersPut,
  usersPost,
  usersDelete,
};
