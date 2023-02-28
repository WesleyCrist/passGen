import express from 'express'
import Codes from '../class/functions/Codes.js'

const none = express()

none.use((req, res, next) => res.status(Codes.notFound.code).send({
    situation: Codes.notFound.title,
    status: Codes.notFound.code
}))

export default none
