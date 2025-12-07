import { PokemonDetail } from '../interfaces/pokemon';
import PokemonCard from './PokemonCard';

interface PokemonListProps {
   pokemons: PokemonDetail[]
   setCurrentPokemon: React.Dispatch<React.SetStateAction<PokemonDetail | null>>
}

export default function PokemonList({ pokemons, setCurrentPokemon }: PokemonListProps) {
   return <div className="w-9/10 md:w-6/10 mx-auto grid md:grid-cols-3 grid-cols-2 gap-2 md:gap-10">
      {
         pokemons.map((pokemon) => <PokemonCard onClick={() => setCurrentPokemon(pokemon)} pokemon={pokemon} key={pokemon.name}></PokemonCard>)
      }
   </div>

}