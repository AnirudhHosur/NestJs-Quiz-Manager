import { Body, Controller, Get, HttpCode, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { QuizService } from "./quiz.service";
import { CreateQuizDto } from "./dto/CreateQuiz.dto";

@Controller('quiz')

export class QuizController {

    constructor(private quizService: QuizService) {}

    @Get('/')
    getAllQuiz() {
        return this.quizService.getAllQuiz();
    }    

    @Post('/create')
    @UsePipes(ValidationPipe)
    async postQuiz(@Body() quizData: CreateQuizDto) {
        return await this.quizService.createNewQuiz(quizData);
    }
}