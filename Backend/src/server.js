const http = require('http')
const app = require('./index')

import addDataTest from './Database/FirestoreInit'

const PORT = (process.env.NODE_ENV === 'development') ? 3000 : 80

addDataTest()

console.log(`App started, listening at port ${PORT}`)
http.createServer(app).listen(PORT)