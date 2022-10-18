const pool = require('./pool')

const getAllProducts = async (req, res) => {
    try {
        // const {rows} = await pool.query('SELECT * FROM ---')
        res.status(200).send("we hit get all")
    } catch (error) {
        console.error(error.message)
    }
}

const getOneProduct = async (req, res) => {
    const {id} = req.params
    try {
        res.status(200).send("Get one route")
    } catch (error) {
        console.error(error.message)
    }
}

const addToCart = async (req, res) => {
    const {body} = req.body
    try {
        res.status(201).send(body)
    } catch (error) {
        console.error(error.message)
    }
}

const editQuantity = async (req, res) => {
    const {id} = req.params
    const {body} = req.body
    try {
        res.status(201).send('patch')
    } catch (error) {
        console.error(error.message)
    }
}

const deleteCart = async (req, res) => {
    const {id} = req.params
    try {
        res.status(200).send('delete')
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = { getAllProducts, getOneProduct, addToCart, editQuantity, deleteCart }