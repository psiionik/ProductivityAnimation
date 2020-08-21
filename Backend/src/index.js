import { routes } from './Routes/router.js'

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express')

const app = express()

app.use('/api', routes())
     
module.exports = app