import { Request, Response } from 'express'
import { IUserRepository } from '@repositories/users/IUserRepository'
import { IController } from '@handles/IController'

export class UserFindByEmail implements IController {
  private userRepository: IUserRepository

  constructor (userRepository: IUserRepository) {
    this.userRepository = userRepository
  }

  async handle (req: Request, res: Response): Promise<Response> {
    try {
      const { findEmail } = req.query
      const result = await this.userRepository.findByEmail(String(findEmail))

      return res.status(200).json(result)
    } catch (error) {
      return res.status(400).json({ error: error.message })
    }
  }
}
