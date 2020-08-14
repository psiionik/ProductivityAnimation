import { Router } from 'express'
import axios from 'axios'

const BASE_URL = "https://cat-fact.herokuapp.com"

const routes = Router()

routes.get('/test', (req, res) => {
    res.send('Hello World')
})
  
routes.get('/new', (req, res) => {
    res.send('New page on hot reload')
})

routes.get('/user', (req, res) => {

    const getData = async () => {
        let data = await axios.get(BASE_URL + '/facts')
            .then((response) => {
                return response.data
            })
        res.send(JSON.stringify(data))
    }

    getData()
})

export default routes

// export const router = () => {
//     const apiRoutes = Router()

//     apiRoutes.get('/', (req, res) => {
//         res.send("Testing withing router")
//     })

//     return apiRoutes
// };

