"use client"


import Image from "next/image";
import SearchInput from "./components/SearchInput";
import SearchButton from "./components/SearchButton";
import BallImage from "./components/BallImage";
import PokemonList from "./components/PokemonList";
import { getPokemons } from './services/pokemonService';
import { useState } from "react";


export default function Home() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState(() => getPokemons(keyword, page, limit).results);
  return (
    <main className="relative h-screen">
      <BallImage className="-left-25" width={250} height={250} />
      <BallImage className="top-10 -right-5" width={250} height={250} />
      <BallImage className="bottom-5 left-10" width={250} height={250} />

      <div className="w-full flex flex-col items-center mt-20">
        <Image className="" src={'/img/main.png'} alt="" width={250} height={125} />
        <div className="flex items-center">
          <SearchInput />
          <SearchButton />

        </div>
        <PokemonList pokemons={data} />
      </div>
    </main>
  );
}
