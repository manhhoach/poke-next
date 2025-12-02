"use client"

import Image from "next/image";
import BallImage from "./components/BallImage";
import PokemonList from "./components/PokemonList";
import { getPokemons } from './services/pokemonService';
import { useEffect, useState } from "react";
import { LIMIT } from "./consts/constant";


export default function Home() {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState(() => getPokemons(keyword, page, LIMIT).results);


  useEffect(() => {
    const fetchData = () => {
      const result = getPokemons(keyword, page, LIMIT);
      setData(result.results);
    };
    fetchData();
  }, [keyword, page]);

  return (
    <main className="relative h-screen overflow-hidden">
      <BallImage className="-left-25" width={250} height={250} />
      <BallImage className="top-10 -right-5" width={250} height={250} />
      <BallImage className="bottom-5 left-10" width={250} height={250} />

      <div className="w-full flex flex-col items-center mt-5">
        <Image className="" src={'/img/main.png'} alt="" width={250} height={125} />
        <div className="flex items-center px-5 py-5">
          <input type="text" className="shadow-xl rounded-lg" onChange={(e) => { setKeyword(e.target.value) }} />
        </div>
        <PokemonList pokemons={data} />
      </div>
    </main>
  );
}
