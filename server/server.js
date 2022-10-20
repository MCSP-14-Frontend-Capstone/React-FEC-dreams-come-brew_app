// const pool = require("./Routes/pool")
// const routes = require('./Routes/routes')
const product = require('./Backend/Routes/Products')
// require('dotenv').config()


const express = require('express');
const cors = require('cors');
// const { default: products } = require("../client/src/data");
const app = express();
const PORT = process.env.PORT || 3500;


app.use(express.json());
app.use(cors());


app.get('/products', product.getAllProducts)

app.get('/products/:id', product.getOneProduct)

app.post('/purchase', product.addToProduct)

app.patch('/product/edit/:id', product.editQuantity)

app.delete('/product/remove', product.deleteCart)



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})