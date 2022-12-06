import { Prisma } from '@prisma/client';

export class CreatePokemonDto implements Prisma.PokemonsCreateInput {
  name: string;
  height?: number;
  Images?: Prisma.ImagesCreateNestedManyWithoutPokemonInput;
}
