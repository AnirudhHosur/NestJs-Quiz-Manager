import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Option } from 'src/modules/quiz/entities/option.entity';
import { Question } from 'src/modules/quiz/entities/question.entity';
import { Quiz } from 'src/modules/quiz/entities/quiz.entity';
import { User } from 'src/modules/user/user.entity';

export default class TypeOrmConfig {
    // Dynamically generate the TypeORM configuration using the ConfigService
    static getOrmConfig(configService: ConfigService): TypeOrmModuleOptions {
        return {
            type: 'postgres',
            host: configService.get<string>('DB_HOST'),
            port: configService.get<number>('DB_PORT') || 5432, // Ensure a fallback port
            username: configService.get<string>('DB_USERNAME'),
            password: configService.get<string>('DB_PASSWORD'),
            database: configService.get<string>('DB_NAME'),
            entities: [Quiz, Question, Option, User],
            synchronize: true, // Automatically sync entities - disable in production!
        };
    }
}

// Async configuration for TypeORM
export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
    imports: [ConfigModule], // Import ConfigModule for access to environment variables
    useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> =>
        TypeOrmConfig.getOrmConfig(configService),
    inject: [ConfigService], // Inject ConfigService to access environment variables
};
