import { Body, Controller, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { CraeteQuestionDto } from "./dto/create-question.dto";
import { QuestionService } from "./question.service";
import { Question } from "./question.entity";

@Controller('question')
export class QuestionController {

    constructor(private questionService: QuestionService) {}
    
    @Post('/')
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() question: CraeteQuestionDto): Promise<Question> {
        return await this.questionService.createQuestion(question);
    }


}