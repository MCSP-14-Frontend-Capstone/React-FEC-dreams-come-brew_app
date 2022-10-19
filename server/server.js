const pool = require("../server/Backend/pool")
const users = require('../server/Backend/Routes/users')
// require('dotenv').config()


const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3500;


app.use(express.json());
app.use(cors());


// app.get('/products', routes.getAllProducts)

// app.get('/products/:id', routes.getOneProduct)

// app.post('/purchase', routes.addToCart)

// app.patch('/product/edit/:id', routes.editQuantity)

// app.delete('/product/remove', routes.deleteCart)



app.get('/users', users.getAllUsers)

app.get('/users/:id', users.getOneUser)

app.post('/users', users.addUser)

app.patch('/users/:id', users.editUser)

app.delete('/users/:id', users.deleteUser)



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})