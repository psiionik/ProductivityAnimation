import { routes } from './Routes/router.js'
import bodyParser from 'body-parser'

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use('/api', routes())
     
module.exports = app