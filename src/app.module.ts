import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MessagesModule } from './messages/messages.module';

// Ponto de partida, onde colocamos os controllers disponiveis e quem ira fornecer: providers

@Module({
  imports: [MessagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
