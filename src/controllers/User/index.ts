import { UserFindByEmail } from '@src/controllers/User/UserFindByEmail'
import { UserRepository } from '@repositories/UserRepository'
import { UserCreate } from '@controllers/User/UserCreate'

const userRepository: UserRepository = new UserRepository()

const userFindByEmail = new UserFindByEmail(userRepository)
const createUser = new UserCreate(userRepository)

export { userFindByEmail, createUser }
