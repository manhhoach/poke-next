"use client"

import Image from "next/image";
import BallImage from "./components/BallImage";
import PokemonList from "./components/PokemonList";
import { getPokemons } from './services/pokemonService';
import { useEffect, useState } from "react";
import { LIMIT } from "./consts/constant";
import Pagination from "./components/Pagination";


export default function Home() {
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const [data, setData] = useState(() => getPokemons(keyword, page, LIMIT));


  useEffect(() => {
    const fetchData = () => {
      const result = getPokemons(keyword, page, LIMIT);
      setData(result);
    };
    fetchData();
  }, [keyword, page]);

  return (
    <main className="relative overflow-hidden">
      <BallImage className="-left-25" width={250} height={250} />
      <BallImage className="top-10 -right-5" width={250} height={250} />
      <BallImage className="bottom-5 left-10" width={250} height={250} />

      <div className="w-full flex flex-col items-center mt-5">
        <Image className="" src={'/img/main.png'} alt="" width={250} height={125} />
        <input type="text" placeholder="Type name here" className="shadow-xl rounded-lg bg-white p-2 mt-5 mb-5" onChange={(e) => { setKeyword(e.target.value) }} />
        <PokemonList pokemons={data.results} />
        <Pagination onPageChange={setPage} page={data.page} totalPages={data.totalPages} />
      </div>
    </main>
  );
}
