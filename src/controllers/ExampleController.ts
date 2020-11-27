import express from 'express'
// import { User } from '@models/User'

export class ExampleController {
  userModel: any

  constructor (user: String) {
    console.log(user)
    this.userModel = user
    // this.userModel = user.getModelForClass(user)
  }

  public index (req: express.Request, res: express.Response) {
    console.log('index')
    console.log(this.userModel)
    // this.userModel.create({
    //  name: 'Jesus Vieira',
    //  age: 35
    // })
    res.json(req.headers)
  }
}
