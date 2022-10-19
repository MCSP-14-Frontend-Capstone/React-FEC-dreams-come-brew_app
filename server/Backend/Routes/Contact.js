const pool = require('../pool')


const getAllContacts = async (req, res) => {
    try {
        const {rows} = await pool.query('SELECT * FROM contact')
        res.status(200).send(rows)
    } catch (error) {
        console.error(error.message)
    }
}




module.exports = {}