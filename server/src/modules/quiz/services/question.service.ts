import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CraeteQuestionDto } from "../dto/create-question.dto";
import { Question } from "../entities/question.entity";
import { Quiz } from "../entities/quiz.entity";
import { QuestionRepository } from "../repositories/question.repository";

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