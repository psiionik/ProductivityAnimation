import { routes } from './Routes/router.js'
if (process.send.NODE_ENV !== 'production'){
    require('dotenv').config();
}

const express = require('express')
const PORT = 3000

const app = express()

app.use('/api', routes())
     
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})