import Image from "next/image"
import { Pokemon } from "../interfaces/pokemon"

interface PokemonCardProps {
   pokemon: Pokemon
}
export default function PokemonCard({ pokemon }: PokemonCardProps) {
   return <div className="rounded-lg shadow-xl w-full">
      <div className="flex flex-col">
         <div className="flex">
            {pokemon.types.map((type) => <div key={type} className="bg-yellow-300 text-white rounded-full px-3 py-1 m-1 text-sm">{type}</div>)}
         </div>
         <h3>{pokemon.name}</h3>
         <Image src={pokemon.avatar ?? "/img/pokeball-color.png"} width={120} height={120} alt="" />
         <button>more</button>
      </div>
   </div>
}