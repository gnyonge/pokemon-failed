import React, { useState, useEffect } from 'react';
import { fetchPokemon } from '../App';

const PokemonDetail = ({ match }) => {
  
  const name = match.params.name;
  const [pokemonDetails, setPokemonDetails] = useState();
  const [loading, setLoading] = useState(true);

  const getPokemon = async (name) => {
    const details = await fetchPokemon(name);
    console.log(details)
    setPokemonDetails(details);
    setLoading(false);
  }

  useEffect(() => {
    getPokemon(name);
  }, [])

  return (
    <div>
      {loading ? (
        <h1>로딩중...</h1>
      ) : (
        <h1>{pokemonDetails.id}</h1>
      )}
    </div>
  );
}

export default PokemonDetail;
