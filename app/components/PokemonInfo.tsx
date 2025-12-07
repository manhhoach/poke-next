import { PokemonDetail } from "../interfaces/pokemon";
import AbilityCard from "./AbilityCard";
import TypeCard from "./TypeCard";

interface PokemonInfo {
   pokemon: PokemonDetail
}
export default function PokemonInfo({ pokemon }: PokemonInfo) {
   const from = pokemon.typesInfo[0].color;
   const to = pokemon.typesInfo.length > 1 ? pokemon.typesInfo[1].color : from;
   return <div className="flex flex-col gap-1">
      <div>
         Height: {pokemon.height}
      </div>
      <div>
         Weight: {pokemon.weight}
      </div>
      <div className="flex">
         {pokemon.typesInfo.map((type) => <TypeCard type={type} key={type.name} />)}
      </div>
      {pokemon.abilities.map((a) => <AbilityCard from={from} to={to} key={a} name={a} />)}
   </div>
}