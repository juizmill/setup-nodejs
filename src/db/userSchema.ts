import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
}, { versionKey: false, timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

const userSchema = mongoose.model('uses', schema)

export { userSchema }
