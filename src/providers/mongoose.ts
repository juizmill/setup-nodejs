import mongoose from 'mongoose'
import { config } from '@config/config'

const Mongoose = mongoose.connect(config.db.connectionString, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: true
})

Mongoose.catch((err) => {
  console.error(err.message)
})

export default mongoose
