import { Router } from 'express'
import { userFindByEmail, createUser } from '@controllers/User'

const router: Router = Router()

router.get('/', (Request, Response) => {
  return userFindByEmail.handle(Request, Response)
})

router.post('/', (Request, Response) => {
  return createUser.handle(Request, Response)
})

export { router }
