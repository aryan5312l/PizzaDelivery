const express = require('express');
const app = express()
const ejs = require('ejs');
const expressLayout = require('express-ejs-layouts');
const path = require('path');
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config()


const PORT = process.env.PORT || 3000;
require('./routes/index')(app)

//Database Connection
const DB_URL = process.env.DB_URL
mongoose.connect(DB_URL, {useNewUrlParser: true, })


app.use(expressLayout)
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs')



app.listen(PORT, () => {
    console.log(`Port is connected to ${PORT}`)
})