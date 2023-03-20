import {Injectable} from '@nestjs/common'

@Injectable()
export class QuizService{

    getAllQuiz(){
        
        return [{title: "Basic of javascript",
                 description: "Question on basics of Javascript"    }]

    }

}