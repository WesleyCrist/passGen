import express from 'express'
import Codes from '../class/functions/Codes.js'

const home = express()

home.get('/', (req, res) => res.status(Codes.ok.code).send({
    situation: Codes.ok.title,
    status: Codes.ok.code
}))

export default home
