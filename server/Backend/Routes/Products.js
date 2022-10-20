const pool = require('../pool');

const getAllProducts = async (req, res) => {
    try {
        const {rows} = await pool.query('SELECT * FROM products')
        res.status(200).send(rows)
    } catch (error) {
        console.error(error.message)
    }
}

const getOneProduct = async (req, res) => {
    const {id} = req.params
    try {
        let {rows} = await pool.query('SELECT * FROM products WHERE product_id = $1', [id])
        res.status(200).send(rows)
    } catch (error) {
        console.error(error.message)
    }
}

const addToProduct = async (req, res) => {
    const {name,category,description,original_price,sale_price,on_sale,popular_item} = req.body
    try {
        let {rows} = await pool.query('INSERT INTO products (name,category, description,original_price,sale_price,on_sale,popular_item) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *',[name,category,description,original_price,sale_price,on_sale,popular_item])
        res.status(201).send(rows)
    } catch (error) {
        console.error(error.message)
    }
}

const editQuantity = async (req, res) => {
    const {order_quantity} = req.body
    const {id} = req.params
    try {
        let {rows} = await pool.query('UPDATE purchase SET order_quantity = $1 WHERE purchase_id = $2 RETURNING *', [order_quantity, id])
        res.status(201).send(rows)
    } catch (error) {
        console.error(error.message)
    }
}

const deleteCart = async (req, res) => {
    const {id} = req.params
    try {
        let {rows} = await pool.query('DELETE FROM purchase WHERE product_id =$1 RETURNING *', [id])
        res.status(200).send(rows)
    } catch (error) {
        console.error(error.message)
    }
}

module.exports = { getAllProducts, getOneProduct, addToProduct, editQuantity, deleteCart }