import Image from "next/image"
import { PokemonDetail } from "../interfaces/pokemon"

interface PokemonCardProps {
   pokemon: PokemonDetail
   onClick: () => void
}
export default function PokemonCard({ pokemon, onClick }: PokemonCardProps) {
   return <div className="rounded-lg shadow-xl w-full bg-white pt-2 px-5 cursor-pointer" onClick={onClick}>
      <div className="flex flex-col items-center">
         <h3 className="truncate w-full text-center">{pokemon.name}</h3>
         <div className="flex">
            {pokemon.typesInfo.map((type) => <div style={{ backgroundColor: type.color }} key={type.name} className={` text-white rounded-full px-3 py-1 m-1 text-sm`}>{type.name}</div>)}
         </div>

         <Image src={pokemon.avatar ?? "/img/pokeball-color.png"} width={120} height={120} alt="" />
      </div>
   </div>
}