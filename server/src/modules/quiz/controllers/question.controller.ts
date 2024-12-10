import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { QuestionService } from "../services/question.service";
import { QuizService } from "../services/quiz.service";
import { Question } from "../entities/question.entity";
import { CraeteQuestionDto } from "../dto/create-question.dto";
import { UpdateQuestionDto } from "../dto/update-question.dto";

@Controller('question')
export class QuestionController {

    constructor(private questionService: QuestionService, private quizService: QuizService) { }

    @Get('/')
    async getAllQuestions(): Promise<Question[]> {
        return await this.questionService.getAllQuestions();
    }

    @Get(':id')
    async getQuestionById(@Param('id', ParseIntPipe) id: number) : Promise<Question> {
        return await this.questionService.getQuestionById(id);
    }

    @Post('/')
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() questionData: CraeteQuestionDto): Promise<Question> {
        const quiz = await this.quizService.getQuizById(questionData.quizId);
        return await this.questionService.createQuestion(questionData, quiz);
    }

    @Put('/:id')
    @UsePipes(ValidationPipe)
    async updateQuestion(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateQuestionDto: UpdateQuestionDto
    ): Promise<Question> {
        return await this.questionService.updateQuestion(id, updateQuestionDto);
    }

    // Delete a question
    @Delete('/:id')
    async deleteQuestion(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
        return await this.questionService.deleteQuestion(id);
    }

}