import { IsNotEmpty, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CraeteQuestionDto {

    @ApiProperty({
        description: 'The text content of the question',
        example: 'What is the capital of France?'
    })
    @IsNotEmpty()
    @Length(3, 255)
    question: string;

    @ApiProperty({
        description: 'The ID of the quiz this question belongs to',
        example: 1
    })
    @IsNotEmpty()
    quizId: number;
}