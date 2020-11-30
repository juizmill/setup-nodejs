import 'dotenv/config'
import '@providers/mongoose'
import { logger } from '@providers/logger'
import express from 'express'
import { router } from '@src/routes'
import createError from 'http-errors'
import { config } from '@config/config'

const app = express()

app.use(logger)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/api', router)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500)
  res.json({ message: err.message })
})

app.listen(config.app.port, () => {
  console.log(`Server started http://localhost:${config.app.port}`)
})
