import 'dotenv/config'
import pino from 'pino'
import express from 'express'
import mongoose from 'mongoose'
import { config } from '@config/config'
// import requireDir from 'require-dir'
import expressPino from 'express-pino-logger'
import { imoviewRoute } from './routes'

const app = express()
const logger = pino({
  level: config.logger.level,
  prettyPrint: config.app.env !== 'production'
})
const expressLogger = expressPino({ logger })

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(expressLogger)

// requireDir('./models')

app.use('/api', imoviewRoute)

const boot = function () {
  app.listen(config.app.port, () => {
    console.log(`Server started http://localhost:${config.app.port}`)
  })
}

if (config.db.connectionString) {
  mongoose.set('useNewUrlParser', true)
  mongoose.set('useCreateIndex', true)
  mongoose.set('useUnifiedTopology', true)
  mongoose.set('useFindAndModify', false)
  mongoose.connect(config.db.connectionString, boot)
} else {
  console.log('No connection DB string provided.')
}
