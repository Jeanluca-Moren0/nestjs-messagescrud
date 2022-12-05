import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// Ponto de partida da API.

@Controller('/app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
