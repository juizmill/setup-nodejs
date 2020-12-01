import { IUserRepository } from '@repositories/users/IUserRepository'
import { UserEntity } from '@src/entities/UserEntity'
import { userSchema } from '@db/userSchema'

export class UserRepository implements IUserRepository {
  async findByEmail (email: string): Promise<UserEntity> {
    const user = await userSchema.findOne({ email }).lean<UserEntity>()

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
