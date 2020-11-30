import pino from 'pino'
import { config } from '@config/config'
import expressPino from 'express-pino-logger'

const logger = pino({
  level: config.logger.level,
  prettyPrint: config.app.env !== 'production'
})
const expressLogger = expressPino({ logger })

export { expressLogger }
