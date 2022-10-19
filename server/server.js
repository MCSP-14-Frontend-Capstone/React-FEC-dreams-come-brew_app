// const pool = require('./Backend/pool')
const routes = require('./Backend/Routes/Products')
const contact = require('./Backend/Routes/Contact')
// require('dotenv').config()


const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3500;


app.use(express.json());
app.use(cors());

//Products Routes
app.get('/products', routes.getAllProducts)

app.get('/products/:id', routes.getOneProduct)

//Purchase Routes


//User Routes



//Contact Routes
app.get('/contacts', contact.getAllContacts)




app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})