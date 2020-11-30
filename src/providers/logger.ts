import fs from 'fs'
import path from 'path'
import morgan from 'morgan'
import { Request, Response, NextFunction } from 'express'

const logger = function (req: Request, res: Response, next: NextFunction) {
  const filePath = path.join(__dirname, '../../', '/logs/app.log')

  if (!filePath) {
    throw new Error('File Path logger not found')
  }

  morgan('common', {
    stream: fs.createWriteStream(filePath, { flags: 'a' })
  })

  next()
}

export { logger }
