import admin from '../Config/admin'

const db = admin.firestore()

const testDBAdd = {
    firstName: 'testing',
    lastName: 'will work',
}

async function addDataTest() {
    await db.collection('users').doc('alovelace').set(testDBAdd)
}

export default addDataTest
