import express from 'express'

const home = express()
// status code ok
const status = 200

home.get('/', (req, res) => res.status(status).send({
    situation: 'application ok',
    status: status
}))

export default home
