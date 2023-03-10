import express from 'express'
import generate from './generate.routes.js'
import home from './home.routes.js'
import none from './none.routes.js'
import test from './test.routes.js'

const grouping = express()

grouping.use('/generate', generate)
grouping.use('/', home)
grouping.use('/test', test)
grouping.use(none)

export default grouping
