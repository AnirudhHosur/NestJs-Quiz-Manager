import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './controllers/question.controller';
import { QuizController } from './controllers/quiz.controller';
import { Question } from './entities/question.entity';
import { Quiz } from './entities/quiz.entity';
import { OptionRepository } from './repositories/option.repository';
import { QuestionRepository } from './repositories/question.repository';
import { QuizRepository } from './repositories/quiz.repository';
import { QuestionService } from './services/question.service';
import { QuizService } from './services/quiz.service';
import { OptionController } from './controllers/option.controller';
import { Option } from './entities/option.entity';
import { OptionService } from './services/option.service';
import { UserModule } from '../user/user.module';

@Module({
    controllers: [QuizController, QuestionController, OptionController],
    imports: [TypeOrmModule.forFeature([Quiz, Question, Option]), UserModule],
    providers: [QuizService, QuizRepository, QuestionService, QuestionRepository, OptionRepository, OptionService]
})
export class QuizModule { }
