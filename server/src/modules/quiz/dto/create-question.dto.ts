import { IsNotEmpty, Length } from "class-validator";

export class CraeteQuestionDto {

    @IsNotEmpty()
    @Length(3, 255)
    question: string;
}