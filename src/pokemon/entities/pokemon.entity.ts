import { Prisma } from '@prisma/client';

export class Pokemon implements Prisma.PokemonsUncheckedCreateInput {
  id?: number | undefined;
  name: string;
  height?: number | null | undefined;
  Images?:
    | Prisma.ImagesUncheckedCreateNestedManyWithoutPokemonInput
    | undefined;
}
