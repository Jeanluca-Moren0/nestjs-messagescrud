import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';

// Ponto de partida, onde colocamos os controllers disponiveis e quem ira fornecer: providers

@Module({
  imports: [PokemonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
