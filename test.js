// scripts/fetchPokemon.js
import fs from 'fs';

const POKEMON_COUNT = 2000; // số Pokémon tối đa
const OUTPUT_FILE = './pokemon_data.json';

async function fetchPokemonList() {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${POKEMON_COUNT}`);
  const data = await res.json();
  return data.results; // array { name, url }
}

async function fetchPokemonDetail(url) {
  const res = await fetch(url);
  const data = await res.json();
  const avatar =
    data.sprites.front_default ||
    data.sprites.front_shiny ||
    data.sprites.other?.['official-artwork']?.front_default ||
    null;
  const collectSprites = (obj) => {
    const list = [];
    for (const key in obj) {
      const val = obj[key];

      if (typeof val === 'string') {
        list.push(val);              // là URL ảnh
      } else if (val && typeof val === 'object') {
        list.push(...collectSprites(val)); // lặp sâu
      }
    }
    return list;
  };

  let spriteList = collectSprites(data.sprites);

  // lọc null + lọc chuỗi rỗng
  spriteList = spriteList.filter(v => v);

  // lọc duplicate
  spriteList = [...new Set(spriteList)];
  return {
    name: data.name,
    height: data.height,
    weight: data.weight,
    abilities: data.abilities.map(a => a.ability.name),
    types: data.types.map(t => t.type.name),
    sprites: spriteList,
    avatar: avatar
  };
}

async function main() {
  const list = await fetchPokemonList();
  const results = [];

  for (const poke of list) {
    try {
      const detail = await fetchPokemonDetail(poke.url);
      results.push(detail);
      console.log(`Fetched: ${detail.name}`);
    } catch (err) {
      console.error(`Error fetching ${poke.name}:`, err);
    }
  }

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(results, null, 2));
  console.log(`Saved ${results.length} Pokémon to ${OUTPUT_FILE}`);
}

main();
