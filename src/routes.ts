import { Router } from 'express'

import { ExampleController } from '@controllers/ExampleController'
// import { User } from '@models/User'

const imoviewRoute: Router = Router()

// const userModel: User = new User()

const createExampleController = new ExampleController('OPAAA')

imoviewRoute.post('/', createExampleController.index)

export { imoviewRoute }
