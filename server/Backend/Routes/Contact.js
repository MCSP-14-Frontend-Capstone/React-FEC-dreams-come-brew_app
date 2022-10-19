const pool = require('../pool')


const getAllContacts = async (req, res) => {
    try {
        const {rows} = await pool.query('SELECT * FROM contact')
        res.status(200).send(rows)
    } catch (error) {
        console.error(error.message)
    }
}

const getOneContact = async (req, res) => {
    const {id} = req.params
    try {
        const {rows} = await pool.query('SELECT * FROM contact WHERE contact_id = $1', [id])
        res.status(200).send(rows)
    } catch (error) {
        console.error(error.message)
    }
}

const postContact = async (req, res) => {
    const {names, email, description} = req.body
    try {
        const {rows} = await pool.query('INSERT INTO contact (names, email, description) VALUES ($1, $2, $3) RETURNING *', [names, email, description])
        res.status(200).send(rows)
    } catch (error) {
        console.error(error.message)
    }
}

const deleteContact = async (req, res) => {
    const {id} = req.params
    try {
        const {rows} = await pool.query('DELETE FROM contact WHERE contact_id = $1', [id])
        res.status(200).send(rows)
    } catch (error) {
        console.error(error.message)
    }
}



module.exports = { getAllContacts, getOneContact, postContact, deleteContact }