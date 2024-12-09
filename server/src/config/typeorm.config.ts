import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { Option } from "src/modules/quiz/entities/option.entity";
import { Question } from "src/modules/quiz/entities/question.entity";
import { Quiz } from "src/modules/quiz/entities/quiz.entity";

export const trypeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'quiz',
    entities: [Quiz, Question, Option],
    synchronize: true,
    logging: true
}