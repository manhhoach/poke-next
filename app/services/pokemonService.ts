import pokemonsData from './../data/pokemons.json'; // giả sử file JSON nằm cùng thư mục

export function getPokemons(keyword: string = '', page: number = 1, limit: number = 15) {
   const filtered = pokemonsData.filter(p =>
      p.name.toLowerCase().includes(keyword.toLowerCase())
   );

   // tính offset
   const start = (page - 1) * limit;
   const paginated = filtered.slice(start, start + limit);

   return {
      results: paginated,
      total: filtered.length,
      page,
      limit,
      totalPages: Math.ceil(filtered.length / limit),
   };
}
