interface Pokemon {
   name: string;
   height: number;
   weight: number;
   abilities: string[];
   types: string[];
   sprites: string[];
   avatar: string | null;
}

interface PokemonDetail extends Pokemon {
   typesInfo: PokemonType[];
}


interface PokemonType {
   name: string;
   color: string;
}

export type { Pokemon, PokemonType, PokemonDetail }
