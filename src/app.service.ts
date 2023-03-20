import {Injectable} from '@nestjs/common';


@Injectable()
export class AppService{
    getHello(): string{
        return 'Hola amigo!';
    }
    getSomething(): string{
        return 'something can be sent backs'
    }
}
