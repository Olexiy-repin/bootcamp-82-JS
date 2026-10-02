import axios from 'axios';

export async function getPokemons(page) {
  const url = `https://pokeapi.co/api/v2/pokemon`;
  const LIMIT = 8;

  const params = {
    limit: LIMIT,
    offset: (page - 1) * LIMIT,
  };

  const res = await axios.get(url, { params });
  const pokemons = res.data.results;

  const promises = pokemons.map(el => {
    return getPokemonDetails(el.url);
  });

  const result = await Promise.all(promises);
  return result;
}

async function getPokemonDetails(url) {
  const res = await axios.get(url);
  return res.data;
}
