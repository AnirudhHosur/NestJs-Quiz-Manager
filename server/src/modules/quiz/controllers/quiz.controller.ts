import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateQuizDto } from "../dto/create-quiz.dto";
import { Quiz } from "../entities/quiz.entity";
import { QuizService } from "../services/quiz.service";
import { UpdateQuizDto } from "../dto/update-quiz.dto";
import { AdminRoleGuard } from "src/modules/auth/admin-role.guard";

@Controller('quiz')

export class QuizController {

    constructor(private quizService: QuizService) { }

    @Get('/')
    getAllQuiz(): Promise<[Quiz[], number]> {
        return this.quizService.getAllQuiz();
    }

    @Get('/:id')
    async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
        return await this.quizService.getQuizById(id);
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    @UseGuards(AdminRoleGuard)
    async postQuiz(@Body() quizData: CreateQuizDto) {
        return await this.quizService.createNewQuiz(quizData);
    }

    @Patch('/:id')
    @UsePipes(ValidationPipe)
    async updateQuizById(@Param('id', ParseIntPipe) id: number, @Body() updateData: UpdateQuizDto): Promise<Quiz> {
        return await this.quizService.updateQuiz(id, updateData);
    }

    @Delete('/:id')
    async deleteQuiz(@Param('id', ParseIntPipe) id: number): Promise<{ message: string }> {
        return await this.quizService.deleteQuiz(id);
    }
}