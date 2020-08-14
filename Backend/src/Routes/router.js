import { Router } from 'express'

const routes = Router()

routes.get('/', (req, res) => {
    res.send("Hello Wrold")
})

export default routes

// export const router = () => {
//     const apiRoutes = Router()

//     apiRoutes.get('/', (req, res) => {
//         res.send("Testing withing router")
//     })

//     return apiRoutes
// };
