import { User } from '@models/User'

test('it should be on', () => {
  const user = new User()

  user.name = 'Jesus Vieira'

  expect(user.name).toEqual('Jesus Vieira')
})
