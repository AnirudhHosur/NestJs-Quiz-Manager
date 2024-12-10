import { IsNotEmpty, Length } from "class-validator";

export class CreateQuizDto {

    @IsNotEmpty({message: 'The quiz should have a title'})
    @Length(3, 255)
    title: string;

    @Length(3)
    description: string
}