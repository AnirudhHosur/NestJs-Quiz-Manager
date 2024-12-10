import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CraeteQuestionDto } from "../dto/create-question.dto";
import { Question } from "../entities/question.entity";
import { Quiz } from "../entities/quiz.entity";
import { QuestionRepository } from "../repositories/question.repository";
import { UpdateQuestionDto } from "../dto/update-question.dto";

@Injectable()

export class QuestionService {

    constructor(
        @InjectRepository(Question)
        private questionRepository: QuestionRepository
    ) { }

    async getAllQuestions(): Promise<Question[]> {
        return await this.questionRepository.find({
            relations: ['quiz', 'options'],
        });
    }

    async getQuestionById(id: number): Promise<Question> {
        const question = await this.questionRepository.findOne({
            where: { id },
            relations: ['quiz', 'options']
        });
        if (!question) {
            throw new NotFoundException(`Quiz with ID ${id} not found`);
        }
        return question;
    }

    async createQuestion(questionData: CraeteQuestionDto, quiz: Quiz): Promise<Question> {
        const newQuestion = this.questionRepository.create({
            ...questionData,
            quiz
        });
        return await this.questionRepository.save(newQuestion);
    }

    async updateQuestion(id: number, updateQuestionDto: UpdateQuestionDto): Promise<Question> {
        const question = await this.getQuestionById(id);
        Object.assign(question, updateQuestionDto);
        return await this.questionRepository.save(question);
    }

    async deleteQuestion(id: number): Promise<{ message: string }> {
        const question = await this.getQuestionById(id);
        await this.questionRepository.remove(question);
        return { message: `Question with ID ${id} successfully deleted` };
    }
}