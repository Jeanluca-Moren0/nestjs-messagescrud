import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreatePokemonDto) {
    return await this.prisma.pokemons.create({
      data,
    });
  }

  async findAll() {
    return await this.prisma.pokemons.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.pokemons.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdatePokemonDto) {
    return this.prisma.pokemons.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    return await this.prisma.pokemons.delete({ where: { id } });
  }
}
