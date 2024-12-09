import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "../dto/CreateQuiz.dto";
import { Quiz } from "../entities/quiz.entity";
import { QuizRepository } from "../repositories/quiz.repository";
import { Question } from "../entities/question.entity";

@Injectable()

export class QuizService {

    constructor(
        @InjectRepository(Quiz)
        private quizRepository: QuizRepository
    ) { }

    async getAllQuiz(): Promise<[Quiz[], number]> {
        return await this.quizRepository.createQueryBuilder('q')
            .leftJoinAndSelect('q.questions', 'qt')
            .leftJoinAndSelect('qt.options', 'o')
            .getManyAndCount();
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