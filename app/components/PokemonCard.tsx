import Image from "next/image"
import { PokemonDetail } from "../interfaces/pokemon"
import TypeCard from "./TypeCard"

interface PokemonCardProps {
   pokemon: PokemonDetail
   onClick: () => void
}
export default function PokemonCard({ pokemon, onClick }: PokemonCardProps) {
   return <div className="rounded-lg shadow-xl w-full bg-white pt-2 px-5 cursor-pointer" onClick={onClick}>
      <div className="flex flex-col items-center">
         <p className="truncate w-full text-center text-sm md:text-base">{pokemon.name}</p>
         <div className="flex">
            {pokemon.typesInfo.map((type) => <TypeCard type={type} key={type.name} />)}
         </div>

         <Image src={pokemon.avatar ?? "/img/pokeball-color.png"} width={120} height={120} alt="" />
      </div>
   </div>
}