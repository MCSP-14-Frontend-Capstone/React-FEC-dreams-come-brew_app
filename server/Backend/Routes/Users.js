const pool = require("../pool");
const queries = require("../../DB/queries");

const getAllUsers = async (req, res) => {
  try {
    const { rows } = await pool.query(queries.getAllUsers);
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
};

const getOneUser = async(req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query(queries.getOneUser, [id]);
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
};

const addUser = async (req, res) => {
  const { user_name, password, confirm_password } = req.body;
  try {
    const { rows } = await pool.query(queries.addUser, [
      user_name,
      password,
      confirm_password,
    ]);
    res.status(201).send("User created");
  } catch (err) {
    console.error(err.message);
  }
};

const editUser = async (req, res) => {
  const { id } = req.params;
  const { user_name, password, confirm_password } = req.body;
  try {
    const { rows } = await pool.query(queries.editUser, [
      user_name,
      password,
      confirm_password,
      id,
    ]);
    res.status(201).send("User Edited");
  } catch (err) {
    console.error(err.message);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query(queries.deleteUser, [id]);
    res.status(200).send("delete");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  addUser,
  editUser,
  deleteUser,
};
