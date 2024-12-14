import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {

    constructor(private userService: UserService, private jwtService: JwtService) { }

    async validateUserCredentials(email: string, password: string): Promise<any> {
        const user = await this.userService.getUserByEmail(email);

        if (!user) {
            throw new BadRequestException('Invalid email');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        console.log('Passport valid:', isPasswordValid)

        if (!isPasswordValid) {
            throw new UnauthorizedException('Invalid password');
        }

        return user;
    }

    async generateToken(user: any) {
        return {
            access_token: this.jwtService.sign({
                name: user.name,
                sub: user.id
            })
        }
    }

}
