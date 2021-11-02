import React from 'react'
import { useSelector } from 'react-redux';
import PokemonItem from '../components/PokemonItem';

const PokemonBag = () => {

  const likeList = useSelector(state => state.pokemonReducer.likeArray)

  return (
    <div>
      { likeList.map( (name, index) => (
        <PokemonItem 
          name={name}
          key={index}
        />
        ))}
    </div>
  )
}

export default PokemonBag
