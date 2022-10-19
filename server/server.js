const pool = require("./Routes/pool")
const routes = require('./Routes/routes')
// require('dotenv').config()


const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3500;


app.use(express.json());
app.use(cors());


app.get('/products', routes.getAllProducts)

app.get('/products/:id', routes.getOneProduct)

app.post('/purchase', routes.addToCart)

app.patch('/product/edit/:id', routes.editQuantity)

app.delete('/product/remove', routes.deleteCart)



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})