const config = {
  app: {
    env: process.env.APP_ENV || 'production',
    port: process.env.APP_PORT || 3000
  },
  logger: {
    level: process.env.LOG_LEVEL || 'info'
  },
  db: {
    connectionString: process.env.MONGO_DB || ''
  }
}

export { config }
