import { Pokemon } from '../interfaces/pokemon';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
   pokemons: Pokemon[]
}

export default function PokemonList({ pokemons }: PokemonListProps) {
   return <div className="w-2/5 mx-auto grid grid-cols-3 gap-10">
      {
         pokemons.map((pokemon) => <PokemonCard pokemon={pokemon} key={pokemon.name}></PokemonCard>)
      }
   </div>

}