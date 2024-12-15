import { ConfigService } from '@nestjs/config';
import * as dotenv from 'dotenv';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';
import { UserCreateSeed } from './src/database/seeds/user-create.seed';

dotenv.config();

const configService = new ConfigService();

const options: DataSourceOptions & SeederOptions = {
    type: 'postgres',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT') || 5432,
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    entities: ['src/**/*.entity{.ts,.js}'],
    migrations: ['src/database/migrations/*.ts'],
    migrationsTableName: 'migrations',
    seeds: [UserCreateSeed],
};

export default new DataSource(options);