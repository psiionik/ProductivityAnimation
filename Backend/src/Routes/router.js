import { Router } from 'express'
import axios from 'axios'

import UsersController from '../Controllers/Users/UsersController'

const debug = require('debug')('express:router')

const BASE_URL = "https://cat-fact.herokuapp.com"

export const routes = () => {
    const apiRoutes = Router()

    apiRoutes.get('/', (req, res) => {
        debug(req.method + ' '+ req.url)
        res.send(process.env.DEBUG)
    })

    apiRoutes.get('/user', (req, res) => {
        debug(req.method + ' '+ req.url)
        const getData = async () => {
            let data = await axios.get(BASE_URL + '/facts')
                .then((response) => {
                    return response.data
                })
            res.send(JSON.stringify(data))
        }

        getData()
    })

    apiRoutes.post('/user', UsersController.createUser)
        
    return apiRoutes
};

