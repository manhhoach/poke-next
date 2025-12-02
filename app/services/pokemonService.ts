import { LIMIT } from '../consts/constant';
import { PokemonDetail } from '../interfaces/pokemon';
import pokemonsData from './../data/pokemons.json';
import pokemonsType from './../data/types.json';

export function getPokemons(keyword: string = '', page: number = 1, limit: number = LIMIT) {
   const pokemons = pokemonsData as PokemonDetail[];

   const filtered = pokemons.filter(p =>
      p.name.toLowerCase().includes(keyword.toLowerCase())
   );

   const start = (page - 1) * limit;
   const paginated = filtered.slice(start, start + limit);

   paginated.forEach(pokemon => {
      pokemon.typesInfo = pokemonsType.filter(t => pokemon.types.includes(t.name));
   })

   return {
      results: paginated,
      total: filtered.length,
      page,
      limit,
      totalPages: Math.ceil(filtered.length / limit),
   };
}

export function getPokemonByName(name: string): PokemonDetail | null {
   const pokemons = pokemonsData as PokemonDetail[];
   const pokemon = pokemons.find(p => p.name.toLowerCase() === name.toLowerCase()) || null;
   if (pokemon) {
      pokemon.typesInfo = pokemonsType.filter(t => pokemon.types.includes(t.name));
   }
   return pokemon;
}
