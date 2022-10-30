const pool = require("../pool")


const getAllPurchase = async (req, res) => {
    try {
        const { rows } = await pool.query(' SELECT * FROM purchase;')
        res.status(200).send(rows)
    } catch (error) {
        console.error(error.message)
    }
}



const getOnePurchase = async (req, res) => {
    const { id } = req.params
    try {
        const { rows } = await pool.query('SELECT * FROM purchase WHERE purchase_id=$1;', [id])
        res.status(200).send(rows)
    } catch (error) {
        console.error(error.message)
    }
}


const AddPurchase = async (req, res) => {
    const { user_name, product_name, order_quantity, order_total, fees, taxes, grand_total, users_id, product_id } = req.body
    try {
        const { rows } = await pool.query('INSERT INTO purchase( user_name, product_name, order_quantity, order_total, fees, taxes, grand_total, users_id, product_id) VALUES($1, $2,$3,$4,$5,$6,$7,$8,$9)RETURNING *', [user_name, product_name, order_quantity, order_total, fees, taxes, grand_total, users_id, product_id])
        res.status(201).send(rows)
    } catch (error) {
        console.error(error.message)
    }
}


const EditPurchase = async (req, res) => {
    const { user_name, product_name, order_quantity, order_total, fees, taxes, grand_total } = req.body
    const { id } = req.params
    try {
        const { rows } = await pool.query('UPDATE purchase SET user_name=$1, product_name=$2, order_quantity=$3, order_total=$4, fees=$5, taxes=$6, grand_total=$7 WHERE purchase_id = $8RETURNING *', [user_name, product_name, order_quantity, order_total, fees, taxes, grand_total, id])
        res.status(201).send(rows)
    } catch (error) {
        console.error(error.message)
    }
}



const DeletePurchase = async (req, res) => {
    const { id } = req.params
    try {
        await pool.query('DELETE FROM purchase WHERE purchase_id=$1', [id])
        res.status(200).send('deleted from table')
    } catch (error) {
        console.error(error.message)
    }
}



// const purchase = require('./Backend/Routes/Purchase');

// app.get('/purchase', purchase.getAllPurchase)
// app.get('/purchase/:id', purchase.getOnePurchase)
// app.post('/purchase', purchase.AddPurchase)
// app.put('/purchase/:id', purchase.EditPurchase)
// app.delete('/purchase/:id', purchase.DeletePurchase)



module.exports = { getAllPurchase, getOnePurchase, AddPurchase, EditPurchase, DeletePurchase }


