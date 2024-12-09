import { Body, Controller, Get, HttpCode, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { QuizService } from "./quiz.service";
import { CreateQuizDto } from "./dto/CreateQuiz.dto";
import { Quiz } from "./quiz.entity";

@Controller('quiz')

export class QuizController {

    constructor(private quizService: QuizService) {}

    @Get('/')
    getAllQuiz() {
        return this.quizService.getAllQuiz();
    }    

    @Get('/:id')
    async getQuizById(@Param('id', ParseIntPipe) id: number): Promise<Quiz> {
        return await this.quizService.getQuizById(id);
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    async postQuiz(@Body() quizData: CreateQuizDto) {
        return await this.quizService.createNewQuiz(quizData);
    }
}