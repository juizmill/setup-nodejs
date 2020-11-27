import express from 'express'
const app = express()

app.get('/', (request, response) => {
  response.json({ message: 'Hello Word!!' })
})

app.listen(4000, () => {
  console.log('Server started http://localhost:4000')
})
