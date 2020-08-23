import { Router } from 'express'
import axios from 'axios'
const debug = require('debug')('express:router')

const BASE_URL = "https://cat-fact.herokuapp.com"

export const routes = () => {
    const apiRoutes = Router()

    apiRoutes.get('/', (req, res) => {
        debug(req.method + ' '+ req.url)
        res.send(process.env.DEBUG)
    })

    apiRoutes.get('/test', (req, res) => {
        debug(req.method + ' '+ req.url)
        res.send('Hello World')
    })
        
    apiRoutes.get('/new', (req, res) => {
        debug(req.method + ' '+ req.url)
        res.send('New page on hot reload')
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

    return apiRoutes
};

