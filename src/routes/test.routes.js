import express from 'express'

const test = express()

test.post('/', (req, res) => {
    const tmp = req.body
    res.status(200).send({
        status: 'ok'
    })
    console.log(tmp)
})

export default test
