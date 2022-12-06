import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(private readonly prisma: PrismaService) {}

  private readonly _include = {
    Images: {
      select: {
        url: true,
      },
    },
  };

  async create(data: CreatePokemonDto) {
    return await this.prisma.pokemons.create({
      data,
      include: this._include,
    });
  }

  async findAll() {
    return await this.prisma.pokemons.findMany({
      include: this._include,
    });
  }

  async findOne(id: number) {
    return await this.prisma.pokemons.findUnique({
      where: { id },
      include: this._include,
    });
  }

  async update(id: number, data: UpdatePokemonDto) {
    return this.prisma.pokemons.update({
      where: { id },
      data,
      include: this._include,
    });
  }

  async remove(id: number) {
    return await this.prisma.pokemons.delete({ where: { id } });
  }
}
