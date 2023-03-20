import { CreateQuizDto } from '../dto/CreateQuiz.dto';
import { Body, Controller, Get, Post, HttpCode, ValidationPipe, UsePipes } from '@nestjs/common';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {

    constructor(private QuizService: QuizService){}

    @Get('/')

    getAllQuiz(){
        return this.QuizService.getAllQuiz();
    }

    @Post('/create')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    createQuiz(@Body() quizData: CreateQuizDto){
        return{data: quizData}
    }


}
