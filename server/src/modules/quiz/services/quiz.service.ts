import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CreateQuizDto } from "../dto/create-quiz.dto";
import { Quiz } from "../entities/quiz.entity";
import { QuizRepository } from "../repositories/quiz.repository";
import { Question } from "../entities/question.entity";
import { UpdateQuizDto } from "../dto/update-quiz.dto";

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
            relations: ['questions', 'questions.options']
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

    async updateQuiz(id: number, updateData: UpdateQuizDto): Promise<Quiz> {
        const quiz = await this.getQuizById(id);
        Object.assign(quiz, updateData);
        return await this.quizRepository.save(quiz);
    }

    async deleteQuiz(id: number): Promise<{ message: string }> {
        const quiz = await this.getQuizById(id);
        await this.quizRepository.remove(quiz);
        return { message: `Quiz with ID ${id} successfully deleted` };
    }

}