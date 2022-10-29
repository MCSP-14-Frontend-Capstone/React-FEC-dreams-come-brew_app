const pool = require("../pool");
const queries = require("../../DB/queries");
const bcrypt = require('bcrypt')


const getAllUsers = async (req, res) => {
  try {
    const { rows } = await pool.query(queries.getAllUsers);
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
};

const getOneUser = async (req, res) => {
  const { id } = req.params;
  try {
    const { rows } = await pool.query(queries.getOneUser, [id]);
    res.status(200).send(rows);
  } catch (err) {
    console.error(err.message);
  }
};

const addUser = async (req, res) => {
  let { newUser, newEmail, newPwd } = req.body;

  try {
    const { rows } = await pool.query('SELECT * FROM users WHERE user_email = $1', [newEmail])

    if (rows.length !== 0) {
      res.send({ message: 'Email already exist' })
    }
    else {
      const hashedPwd = await bcrypt.hash(newPwd, 10)
      await pool.query(queries.addUser, [newEmail, newUser, hashedPwd]);
      res.status(201).send("User created");
    }
  } catch (err) {
    console.error(err.message);
  }
};

const LoginUser = async (req, res) => {
  const { loginName, loginPassword } = req.body;

  try {
    const { rows } = await pool.query(queries.getAllUsers);
    const user = rows.find(user => {
      if (user.user_name === loginName) {
        return user.user_name;
      } else {
        return undefined;
      }
    })
    if (user === undefined) {
      res.send(false)
    } else {
      const auth = await bcrypt.compare(loginPassword, user.password);
      res.send(auth)
    }

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
  LoginUser
};
