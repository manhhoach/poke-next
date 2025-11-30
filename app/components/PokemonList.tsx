import axios from "axios"

export default function PokemonList() {
   const data = axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then(res => res.data).catch(err => console.log(err))
   return <div className=""></div>

}