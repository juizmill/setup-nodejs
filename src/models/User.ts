import { prop, Typegoose } from 'typegoose'

export class User extends Typegoose {
  @prop({ required: true })
  public name!: string

  @prop({ required: false })
  public age?: number
}
