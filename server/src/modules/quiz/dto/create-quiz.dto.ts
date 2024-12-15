import { IsNotEmpty, Length } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateQuizDto {

    @ApiProperty({
        description: 'The title of the quiz',
        example: 'Geography Quiz'
    })
    @IsNotEmpty({message: 'The quiz should have a title'})
    @Length(3, 255)
    title: string;

    @ApiProperty({
        description: 'A description of what the quiz is about',
        example: 'Test your knowledge of world capitals and landmarks'
    })
    @Length(3)
    description: string
}