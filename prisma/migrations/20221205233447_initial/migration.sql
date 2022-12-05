-- CreateTable
CREATE TABLE "Pokemons" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "height" INTEGER,

    CONSTRAINT "Pokemons_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Images" (
    "id" SERIAL NOT NULL,
    "pokemonId" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Images_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pokemons_name_key" ON "Pokemons"("name");

-- AddForeignKey
ALTER TABLE "Images" ADD CONSTRAINT "Images_pokemonId_fkey" FOREIGN KEY ("pokemonId") REFERENCES "Pokemons"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
