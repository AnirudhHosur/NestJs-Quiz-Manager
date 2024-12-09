import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizController } from './quiz.controller';
import { Quiz } from './quiz.entity';
import { QuizService } from './quiz.service';
import { QuizRepository } from './quiz.repository';
import { QuestionController } from './question.controller';
import { QuestionService } from './question.service';
import { QuestionRepository } from './question.repository';
import { Question } from './question.entity';

@Module({
    controllers: [QuizController, QuestionController],
    imports: [TypeOrmModule.forFeature([Quiz, Question])],
    providers: [QuizService, QuizRepository, QuestionService, QuestionRepository]
})
export class QuizModule { }
