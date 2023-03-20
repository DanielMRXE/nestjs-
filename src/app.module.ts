import { QuizModule } from './modules/quiz/quiz.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';

@Module({
imports: [QuizModule, TypeOrmModule.forRoot(typeormConfig)],
controllers: [AppController],
providers: [AppService],


})
export class AppModule {}   
