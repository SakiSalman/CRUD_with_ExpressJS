const color = require('colors')
const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const path = require('path')
const expresslayouts = require('express-ejs-layouts')
const mongoDBConnect = require('./config/db')

// MongoDB connection
mongoDBConnect();

// body data
app.use(express.json())
app.use(express.urlencoded({
    extended : false
}))
// Dot env load
const port = process.env.PORT

// Static Folder
app.use('/assets', express.static(path.join(__dirname, '/assets')))


//setup ejs
app.set("view engine", "ejs")

// set layouts
app.set('layout', 'layouts/app')
app.use(expresslayouts)


// routes
app.use('/', require('./routes/students'))

// Listen Server
app.listen(port, () => {
    console.log(`Server is Running ${port}`.bgGreen.black);
})
