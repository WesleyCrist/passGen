import express from 'express'
import Codes from '../class/functions/Codes.js'

const test = express()

test.post('/', (req, res) => {
    const tmp = req.body
    if(Object.keys(tmp).length !== 0) {
        res.status(Codes.ok.code).send({
            situation: Codes.ok.title,
            status: Codes.ok.code,
            request: tmp
        })
    } else {
        res.status(Codes.noContent.code).send({
            situation: Codes.noContent.title,
            status: Codes.noContent.code,
            request: 'not received'
        })
    }
})

test.get('/', (req, res) => res.status(Codes.ok.code).send({
    situation: Codes.ok.title,
    status: Codes.ok.code
}))

export default test
