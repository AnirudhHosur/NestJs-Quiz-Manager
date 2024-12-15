import { Body, Controller, Post } from "@nestjs/common";
import { SETTINGS } from "src/app.utils";
import { UserRegisterRequestDto } from "./dto/user-register.req.dto";
import { UserService } from "./user.service";
import { User } from "./user.entity";
import { ApiCreatedResponse, ApiBadRequestResponse } from "@nestjs/swagger";

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('/register')
    @ApiCreatedResponse({
        description: 'User registration successful',
        type: User
    })
    @ApiBadRequestResponse({
        description: 'Invalid user registration data'
    })
    async doUserRegistration(@Body(SETTINGS.VALIDATION_PIPE) userRegister: UserRegisterRequestDto): Promise<User> {
        return await this.userService.doUserRegistration(userRegister);
    }

}