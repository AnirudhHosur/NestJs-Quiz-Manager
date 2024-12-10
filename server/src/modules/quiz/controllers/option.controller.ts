import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { CreateOptionDto } from "../dto/create-option.dto";
import { UpdateOptionDto } from "../dto/update-option.dto";
import { Option } from "../entities/option.entity";
import { OptionService } from "../services/option.service";
import { QuestionService } from "../services/question.service";

@Controller('question/option')
export class OptionController {

    constructor(private optionService: OptionService, private questionService: QuestionService) { }

    // Get all options
    @Get('/')
    async getAllOptions(): Promise<Option[]> {
        return await this.optionService.getAllOptions();
    }

    // Get option by id
    @Get('/:id')
    async getOptionById(@Param('id', ParseIntPipe) id: number): Promise<Option> {
        return await this.optionService.getOptionById(id);
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    async saveOptionToQuestion(@Body() createOption: CreateOptionDto): Promise<Option> {
        const question = await this.questionService.getQuestionById(createOption.questionId);
        return await this.optionService.createOption(createOption, question);
    }

    @Put('/:id')
    @UsePipes(ValidationPipe)
    async updateOption(
        @Param('id', ParseIntPipe) id: number,
        @Body() updateOptionDto: UpdateOptionDto
    ): Promise<Option> {
        return await this.optionService.updateOption(id, updateOptionDto);
    }


}