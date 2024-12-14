import { JwtModuleOptions } from "@nestjs/jwt";
import { ConfigService } from '@nestjs/config';

export const JwtConfig = (configService: ConfigService): JwtModuleOptions => ({
    secret: configService.get<string>('APP_SECRET'),
    signOptions: { expiresIn: '1d' },
});