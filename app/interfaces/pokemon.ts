interface Pokemon {
   name: string;
   height: number;
   weight: number;
   abilities: string[];
   types: string[];
   sprites: string[];
   avatar: string | null;
}


interface PokemonType {
   name: string;
   color: string;
}

export type { Pokemon, PokemonType }
