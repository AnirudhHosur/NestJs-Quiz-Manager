import { Injectable } from "@nestjs/common";
import { QuizRepository } from "./quiz.repository";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "./dto/CreateQuiz.dto";
import { Quiz } from "./quiz.entity";

@Injectable()

export class QuizService {

    constructor(
        @InjectRepository(Quiz)
        private quizRepository: QuizRepository
    ) { }

    getAllQuiz() {
        return [1, 2, 3];
    }

    async createNewQuiz(quizData: CreateQuizDto): Promise<Quiz> {
        const quiz = this.quizRepository.create(quizData);
        return await this.quizRepository.save(quiz);
    }
}