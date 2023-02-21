import express from 'express'

const test = express()
// test.use(express.json())

test.post('/', (req, res) => {
    const tmp = req.body
    res.status(200).send({
        status: 'ok',
        request: tmp
    })
    console.log(tmp)
})

export default test
