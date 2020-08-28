import User from '../../Database/Users/FirestoreMethods'

const UsersController = {

    /**
     * POST request api route for creating a new user.
     * This is gets an email and password in the request body and sends it to the method to interface with the database
     */
    createUser = async (req, res) => {
        console.log(req)
    }
}

export default UsersController