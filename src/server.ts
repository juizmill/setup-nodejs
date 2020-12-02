import 'dotenv/config'
import '@providers/mongoose'
import express, { NextFunction, Request, Response } from 'express'
import { router } from '@src/routes'
import createError, { HttpError } from 'http-errors'
import { config } from '@config/config'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.redirect('/api')
})

app.use('/api', router)

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404))
})

// error handler
app.use((err: HttpError, req: Request, res: Response) => {
  res.status(err.status || 500).json({ message: err.message })
})

app.listen(config.app.port, () => {
  console.log(`Server started http://localhost:${config.app.port}`)
})
