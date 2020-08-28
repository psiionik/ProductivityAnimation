const http = require('http')
const app = require('./index')

const PORT = (process.env.NODE_ENV === 'development') ? 3000 : 80

console.log(`App started, listening at port ${PORT}`)
http.createServer(app).listen(PORT)