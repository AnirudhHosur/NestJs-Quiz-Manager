import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { UserRegisterRequestDto } from "./dto/user-register.req.dto";
import { User } from "./user.entity";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepo: UserRepository,
    ) { }

    async doUserRegistration(userRegister: UserRegisterRequestDto): Promise<User> {
        const user = new User();
        user.name = userRegister.name;
        user.email = userRegister.email;
        user.password = userRegister.password;

        return await this.userRepo.save(user);
    }
}