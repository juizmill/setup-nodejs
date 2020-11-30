import { IUserRepository } from '@repositories/IUserRepository'
import { UserEntity } from '@src/entities/UserEntity'
import { userSchema } from '@src/schemas/userSchema'

export class UserRepository implements IUserRepository {
  async findByEmail (email: string): Promise<UserEntity> {
    console.warn(email)
    const user = await userSchema.findOne({ email }).lean()

    if (!user) {
      throw new Error('User not found')
    }

    const userEntity: UserEntity = new UserEntity(user)

    return userEntity
  }

  async save (user: UserEntity): Promise<void> {
    const result = await userSchema.create({
      name: user.name,
      email: user.email,
      password: user.password
    })

    if (!result) {
      throw new Error('Erro ao cadastrar o usuário')
    }
  }
}
