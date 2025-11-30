import { useState } from "react";

export default function PokemonCard() {
   const [page, setPage] = useState(1);
   const [limit, setLimit] = useState(15);
   const [keyword, setKeyword] = useState('');
   return <div className="rounded-lg shadow-xl">
      Pokemon Card
   </div>
}