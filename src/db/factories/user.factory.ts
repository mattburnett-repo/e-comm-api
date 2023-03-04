import { setSeederFactory } from 'typeorm-extension'
import { User } from '../../user/entities/user.entity'

export default setSeederFactory(User, (faker) => {
  const user = new User()

  user.name = faker.name.fullName()
  user.username = faker.internet.userName()
  user.password = 'password'
  user.email = faker.internet.email()

  return user
})
