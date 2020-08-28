import dbConnection from '../FirestoreInit'
import Messages from '../../Utils/ApiMessages'

const Users = {

    /** A reference to the collection of users, allows for keeping a reference for all the methods */
    collectionRef: dbConnection.collection('users'),

    async CreateUser(data) {
        const email = data.email
        const password = data.password

        const dbRef = this.collectionRef.doc(email)
        
        try {
            await dbRef.set({
                email: email,
                password: password
            })

            return Messages.POST_SUCCESS_MESSAGE
        }
        catch (e) {
            throw new Error('Could not create the user due to: ' + e)
        }
    }

}

export default Users