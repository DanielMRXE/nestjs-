import { Quiz } from './../modules/quiz/quiz.entity';
import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeormConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'lazarous0101',
    database: 'quiz',
    entities:  [Quiz],
    synchronize: true,
}