const getAllUsers = "SELECT * FROM users;"
const getOneUser = "SELECT * FROM users WHERE users_id = $1"
const addUser = "INSERT INTO users (user_name, password, confirm_password) VALUES ($1, $2, $3)"
const editUser = "UPDATE users SET user_name = $1, password = $2, confirm_password = $3 WHERE users_id = $4"
const deleteUser = "DELETE FROM users WHERE users_id = $1"

module.exports = {
  getAllUsers,
  getOneUser,
  addUser,
  editUser,
  deleteUser,
}