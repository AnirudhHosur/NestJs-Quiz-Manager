import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "../dto/CreateQuiz.dto";
import { Quiz } from "../entities/quiz.entity";
import { QuizRepository } from "../repositories/quiz.repository";

@Injectable()

export class QuizService {

    constructor(
        @InjectRepository(Quiz)
        private quizRepository: QuizRepository
    ) { }

    getAllQuiz() {
        return [1, 2, 3];
    }

    async getQuizById(id: number): Promise<Quiz> {
        const quiz = await this.quizRepository.findOne({
            where: { id },
            relations: ['questions']
        });
        if (!quiz) {
            throw new NotFoundException(`Quiz with ID ${id} not found`);
        }
        return quiz;
    }

    async createNewQuiz(quizData: CreateQuizDto): Promise<Quiz> {
        const quiz = this.quizRepository.create(quizData);
        return await this.quizRepository.save(quiz);
    }
}