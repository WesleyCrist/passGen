import express from 'express'
import Generator from '../class/functions/Generator.js'

const generate = express()
// generate.use(express.json())

const status = {
    ok: 200,
    fail: 400
}

// falta colocar status code
generate.post('/', (req, res) => {
    const tmp = req.body
    // res.send(tmp)
    try {
        const gen = new Generator(tmp)
        const reply = gen.run()
        res.status(status.ok).send({
            status: status.ok,
            password: reply,
            length: `${reply.length} characters`
        })
    } catch(e) {
        res.status(status.fail).send({
            status: status.fail,
            message: e.message
        })
    }
})

export default generate
