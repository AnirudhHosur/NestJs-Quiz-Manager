import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuestionRepository } from './repositories/question.repository';
import { QuestionService } from './services/question.service';
import { QuizController } from './controllers/quiz.controller';
import { QuestionController } from './controllers/question.controller';
import { Question } from './entities/question.entity';
import { QuizRepository } from './repositories/quiz.repository';
import { QuizService } from './services/quiz.service';

@Module({
    controllers: [QuizController, QuestionController],
    imports: [TypeOrmModule.forFeature([Quiz, Question])],
    providers: [QuizService, QuizRepository, QuestionService, QuestionRepository]
})
export class QuizModule { }
