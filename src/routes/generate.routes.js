import express from 'express'
import Generator from '../class/functions/Generator.js'
import Codes from '../class/functions/Codes.js'

const generate = express()

generate.post('/', (req, res) => {
    const tmp = req.body
    try {
        const gen = new Generator(tmp)
        const reply = gen.run()
        res.status(Codes.ok.code).send({
            situation: Codes.ok.title,
            status: Codes.ok.code,
            password: reply,
            length: `${reply.length} characters`
        })
    } catch(e) {
        res.status(Codes.badRequest.code).send({
            situation: Codes.badRequest.title,
            status: Codes.badRequest.code,
            message: e.message
        })
    }
})

export default generate
