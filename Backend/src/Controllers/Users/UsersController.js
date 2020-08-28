import Users from '../../Database/Users/FirestoreMethods'
import Messages from '../../Utils/ApiMessages'

const UsersController = {

    /**
     * POST request api route for creating a new user.
     * This is gets an email and password in the request body and sends it to the method to interface with the database
     */
    createUser: async (req, res) => {

        try {   
            const resMessage = await Users.CreateUser(req.body)

            if (resMessage === Messages.POST_SUCCESS_MESSAGE) {
                res.status(201)
                    .send("Sucessfully created a new user!")
            }
            else {
                res.status(400)
                    .send("An error occured: wasn't able to find the created user")
            }
        }
        catch (e) {
            res.status(500)
                .send("An error occured: internal error")
        }
    }
}

export default UsersController