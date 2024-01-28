import express from 'express'
import grouping from './routes/grouping.js'

const main = express()
// const port = 8081
const port = process.env.PORT
main.use(express.json())
main.use(grouping)

main.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`))
