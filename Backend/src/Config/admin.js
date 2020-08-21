import admin from 'firebase-admin'

// const serviceAccount = require(process.env.GOOGLE_APPLICATION_CREDENTIALS)
const serviceAccount = require('./FirebaseCredentials2.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

export default admin

