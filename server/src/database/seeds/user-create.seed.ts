import { faker } from "@faker-js/faker";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
import { User } from "../../modules/user/user.entity";

export class UserCreateSeed implements Seeder {
    async run(dataSource: DataSource, factoryManager: SeederFactoryManager): Promise<void> {
        const userRepository = dataSource.getRepository(User);

        // Create 10 sample users
        const users = await Promise.all(Array(10).fill(null).map(async () => {
            const user = new User();
            user.name = faker.person.fullName();
            user.email = faker.internet.email();
            await user.setPassword('Password@123');
            return user;
        }));

        // Save all users
        await userRepository.save(users);

        console.log('Seeded 10 users successfully');
    }
}