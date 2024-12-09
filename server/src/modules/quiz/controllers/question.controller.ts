import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { QuestionService } from "../services/question.service";
import { QuizService } from "../services/quiz.service";
import { Question } from "../entities/question.entity";
import { CraeteQuestionDto } from "../dto/create-question.dto";

@Controller('question')
export class QuestionController {

    constructor(private questionService: QuestionService, private quizService: QuizService) { }

    @Post('/')
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() questionData: CraeteQuestionDto): Promise<Question> {
        const quiz = await this.quizService.getQuizById(questionData.quizId);
        return await this.questionService.createQuestion(questionData, quiz);
    }

}