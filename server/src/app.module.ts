import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { typeOrmConfigAsync } from './config/typeorm.config';
import { QuizModule } from './modules/quiz/quiz.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make the ConfigModule globally available
      envFilePath: '.env', // Load environment variables from .env file
    }),
    QuizModule,
    TypeOrmModule.forRootAsync(typeOrmConfigAsync), // Use the async TypeORM config
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
