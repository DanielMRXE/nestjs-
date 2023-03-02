import { Injectable } from "@nestjs/common/decorators";

@Injectable ({})
export class AuthService {
signup(){
    return{msg: "I have signed Ups"}
}

signin(){

    return {msg :'I have signed In'}
}
}