import { UserEntity } from '@src/entities/UserEntity'

export interface IUserRepository {
  findByEmail(email: string): Promise<UserEntity>
  save(user: UserEntity): Promise<void>
}
