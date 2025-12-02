import Image from "next/image"
import { PokemonDetail } from "../interfaces/pokemon"

interface PokemonCardProps {
   pokemon: PokemonDetail
}
export default function PokemonCard({ pokemon }: PokemonCardProps) {
   return <div className="rounded-lg shadow-xl w-full bg-white p-2 cursor-pointer ">
      <div className="flex flex-col items-center">
         <h3>{pokemon.name}</h3>
         <div className="flex">
            {pokemon.typesInfo.map((type) => <div style={{ backgroundColor: type.color }} key={type.name} className={` text-white rounded-full px-3 py-1 m-1 text-sm`}>{type.name}</div>)}
         </div>

         <Image src={pokemon.avatar ?? "/img/pokeball-color.png"} width={120} height={120} alt="" />
      </div>
   </div>
}