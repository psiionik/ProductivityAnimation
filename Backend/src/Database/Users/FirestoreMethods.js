import dbConnection from '../FirestoreInit'

const Users = (function() {

    /** A reference to the collection of users, allows for keeping a reference for all the methods */
    const collectionRef = dbConnection.collection('users')

    async function CreateUser(data) {
        const email = data.email
        const password = data.password

        const dbRef = collectionRef.doc(email)
        
        try {
            await dbRef.set({
                email: email,
                password: password
            })

            return "Sucessfully created a new user!"
        }
        catch (e) {
            throw new Error('Could not create the user due to: ' + e)
        }
    }

})()

export default Users