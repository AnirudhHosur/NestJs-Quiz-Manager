import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './modules/quiz/quiz.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { trypeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [QuizModule, TypeOrmModule.forRoot(trypeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
