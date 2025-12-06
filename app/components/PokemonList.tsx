import { PokemonDetail } from '../interfaces/pokemon';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
   pokemons: PokemonDetail[]
   setCurrentPokemon: React.Dispatch<React.SetStateAction<PokemonDetail | null>>
}

export default function PokemonList({ pokemons, setCurrentPokemon }: PokemonListProps) {
   return <div className="w-2/5 mx-auto grid grid-cols-3 gap-10">
      {
         pokemons.map((pokemon) => <PokemonCard onClick={() => setCurrentPokemon(pokemon)} pokemon={pokemon} key={pokemon.name}></PokemonCard>)
      }
   </div>

}