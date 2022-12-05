import { Injectable } from '@nestjs/common';

// Service fornece o dado, funções de banco de dados e etc...

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
