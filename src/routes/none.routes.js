import express from 'express'

const none = express()
// status code notFound
const code = 404

none.use((req, res, next) => res.status(code).send({
    error: 'incorrect route',
    status: code
}))

export default none
