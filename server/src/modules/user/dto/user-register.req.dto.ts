import { IsEmail, IsNotEmpty, Length, Matches } from "class-validator";
import { MESSAGES, REGEX } from "src/app.utils";
import { ApiProperty } from "@nestjs/swagger";

export class UserRegisterRequestDto {

    @ApiProperty({
        description: 'The name of the user',
        example: 'John Doe'
    })
    @IsNotEmpty()
    name: string

    @ApiProperty({
        description: 'The email address of the user',
        example: 'john.doe@example.com'
    })
    @IsNotEmpty()
    @IsEmail()
    email: string

    @ApiProperty({
        description: 'The password for the account (8-24 characters, must contain uppercase, lowercase, number and special character)',
        example: 'Password123!'
    })
    @IsNotEmpty()
    @Length(8, 24)
    @Matches(REGEX.PASSWORD_RULE, {
        message: MESSAGES.PASSWORD_RULE_MESSAGE
    })
    password: string

    @ApiProperty({
        description: 'Confirm password - must match password field',
        example: 'Password123!'
    })
    @IsNotEmpty()
    @Length(8, 24)
    @Matches(REGEX.PASSWORD_RULE, {
        message: MESSAGES.PASSWORD_RULE_MESSAGE
    })
    confirm: string
}