import { Seeder } from 'typeorm-extension'
import { DataSource } from 'typeorm'
import { User } from '../../user/entities/user.entity'

export default class UserSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const userRepo = dataSource.getRepository(User)
    const user = new User()

    user.firstName = 'Test'
    user.lastName = 'One'
    user.username = 'testOne'
    user.password = 'testOne'
    user.email = 'test@one.com'

    await userRepo.save(user)
  }
}
