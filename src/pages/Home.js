import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import PokemonThumbnail from '../components/PokemonThumbnail';
import { fetchPokemon, getKoreanData } from '../App';
import { setPokemons, setKoreanData } from '../modules/pokemonReducer';

const Home = () => {

  const [allPokemons, setAllPokemons] = useState([]);
  const [koData, setKoData] = useState([]);
  const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20');
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const pokemons = useSelector(state => state.pokemonReducer.pokemonArray)

  const getAllPokemons = async () => {
    
    const createPokemonObject = async (results) => {
      const nextList = await Promise.all(results.map(pokemon => fetchPokemon(pokemon.name)));
      setAllPokemons(currentList => [...currentList, ...nextList]);
      const sumList = [...allPokemons, ...nextList]
      const koList = await Promise.all(sumList.map(pokemon => getKoreanData(pokemon.name)));
      setKoData(koList)
      setLoading(false);
    }
    
    const pokemonData = await axios.get(loadMore) 
    setLoadMore(pokemonData.data.next);
    createPokemonObject(pokemonData.data.results);
  }

  useEffect(() => {
    getAllPokemons(); 
  }, []);

  useEffect(() => {
    dispatch(setPokemons(allPokemons)); 
    dispatch(setKoreanData(koData))
  }, [koData]); 


  return (
    <div className="app-container">
      {loading ? (
        <h1>로딩중...</h1>
      ) : (
      <>
        <h1>포켓몬 에볼루션</h1>
        <div className="pokemon-container">
          <div className="all-container">
            { pokemons.map((pokemon, index) => (
              <PokemonThumbnail 
              id={pokemon.id}
                name={pokemon.name}
                image={pokemon.sprites.other.dream_world.front_default}
                type={pokemon.types[0].type.name}
                key={index}
              />
              ))}
          </div>
          <button className="load-more" onClick={() => getAllPokemons()}>더보기</button>
        </div>
      </>
    )}
    </div>
  );
}

export default Home
