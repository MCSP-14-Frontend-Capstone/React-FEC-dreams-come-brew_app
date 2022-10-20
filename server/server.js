
// const pool = require("./Routes/pool")
const product = require('./Backend/Routes/Products')

const contact = require('./Backend/Routes/Contact')

const pool = require("../server/Backend/pool")
const users = require('../server/Backend/Routes/users')

// require('dotenv').config()


const express = require('express');
const cors = require('cors');
// const { default: products } = require("../client/src/data");
const app = express();
const PORT = process.env.PORT || 3500;


app.use(express.json());
app.use(cors());

// //Products Routes


// //User Routes



// //Contact Routes
// app.get('/contacts', contact.getAllContacts)

// app.get('/contacts/:id', contact.getOneContact)

// app.post('/contacts/post', contact.postContact)

// app.delete('/contacts/:id', contact.deleteContact)





app.get('/products', product.getAllProducts)

app.get('/products/:id', product.getOneProduct)

app.post('/purchase', product.addToProduct)

app.patch('/product/edit/:id', product.editQuantity)

app.delete('/product/remove', product.deleteCart)


// app.get('/users', users.getAllUsers)

// app.get('/users/:id', users.getOneUser)

// app.post('/users', users.addUser)

// app.patch('/users/:id', users.editUser)

// app.delete('/users/:id', users.deleteUser)





app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})