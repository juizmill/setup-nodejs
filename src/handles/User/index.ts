import { UserFindByEmail } from '@handles/User/UserFindByEmail'
import { UserRepository } from '@repositories/users/UserRepository'
import { UserCreate } from '@handles/User/UserCreate'

const userRepository: UserRepository = new UserRepository()

const userFindByEmail = new UserFindByEmail(userRepository)
const createUser = new UserCreate(userRepository)

export { userFindByEmail, createUser }
