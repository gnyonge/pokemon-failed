import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokemonThumbnail from '../components/PokemonThumbnail';
import { fetchPokemon } from '../App';

const Home = () => {

  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');

  const getAllPokemons = () => {

    function createPokemonObject (results) {
      results.forEach( async (pokemon) => {
        const res = await fetchPokemon(pokemon.name)
        setAllPokemons(currentList => [...currentList, res])
      })
    }

    axios.get(loadMore)
    .then((res) => {
      const pokemonData = res.data;
      setLoadMore(pokemonData.next);
      createPokemonObject(pokemonData.results);
    })
  }

  useEffect(() => {
    getAllPokemons()
  }, [])

  return (
    <div className="app-container">
      <h1>포켓몬 에볼루션</h1>
      <div className="pokemon-container">
        <div className="all-container">
          { allPokemons.map((pokemon, index) => 
            <PokemonThumbnail 
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index}
            />
          )}
        </div>
        <button className="load-more" onClick={() => getAllPokemons()}>더보기</button>
      </div>
    </div>
  );
}

export default Home
