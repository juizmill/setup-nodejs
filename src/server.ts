import 'dotenv/config'
import express from 'express'
import { config } from '@config/config'
import { router } from '@src/routes'
import { expressLogger } from '@providers/logger'
import '@providers/mongoose'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(expressLogger)

app.use('/api', router)

app.listen(config.app.port, () => {
  console.log(`Server started http://localhost:${config.app.port}`)
})
