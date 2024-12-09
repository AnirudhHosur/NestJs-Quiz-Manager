import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Question } from "src/modules/quiz/question.entity";
import { Quiz } from "src/modules/quiz/quiz.entity";

export const trypeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'quiz',
    entities: [Quiz, Question],
    synchronize: true,
}