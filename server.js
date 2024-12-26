require('dotenv').config()
const express = require('express')
const connectToDB = require('./database/db');
const book_routes = require('./routes/bookRoutes')
connectToDB()

const app = express();
app.use(express.json())

app.use('/api/books', book_routes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})