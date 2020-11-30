import { Request, Response } from 'express'
import { UserEntity } from '@entities/UserEntity'
import { IUserRepository } from '@repositories/IUserRepository'
import { IController } from '@controllers/IController'

export class UserCreate implements IController {
  private userRepository: IUserRepository

  constructor (userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password } = req.body

      const entity = new UserEntity({
        name,
        email,
        password
      })

      await this.userRepository.save(entity)

      return res.status(201).json({
        message: 'Usuario cadastrado com sucesso'
      })
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}
