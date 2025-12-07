import { PokemonType } from "../interfaces/pokemon";

interface TypeCardProps {
   type: PokemonType
}

export default function TypeCard({ type }: TypeCardProps) {
   return <div style={{ backgroundColor: type.color }} className={` text-white rounded-full px-3 py-1 m-1 text-sm`}>
      {type.name}
   </div>
}