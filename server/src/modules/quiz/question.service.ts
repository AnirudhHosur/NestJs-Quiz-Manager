import { Injectable } from "@nestjs/common";
import { QuizRepository } from "./quiz.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "./dto/CreateQuiz.dto";
import { Quiz } from "./quiz.entity";
import { QuestionRepository } from "./question.repository";
import { Question } from "./question.entity";
import { CraeteQuestionDto } from "./dto/create-question.dto";

@Injectable()

export class QuestionService {

    constructor(
        @InjectRepository(Question)
        private questionRepository: QuestionRepository
    ) { }

    async createQuestion(questionData: CraeteQuestionDto, quiz: Quiz): Promise<Question> {
        const newQuestion = this.questionRepository.create({
            ...questionData,
            quiz
        });
        return await this.questionRepository.save(newQuestion);
    }
}