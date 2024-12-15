import { IsNotEmpty, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateOptionDto {

    @ApiProperty({
        description: 'The text content of the option',
        example: 'Paris'
    })
    @IsNotEmpty()
    @Length(2, 255)
    text: string;

    @ApiProperty({
        description: 'The ID of the question this option belongs to',
        example: 1
    })
    @IsNotEmpty()
    questionId: number;

    @ApiProperty({
        description: 'Whether this option is the correct answer',
        example: true
    })
    @IsNotEmpty()
    isCorrect: boolean;
}