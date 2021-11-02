import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { likePokemon } from '../modules/pokemonReducer';

const PokemonItem = ({ name }) => {
  const style = {width: '150px'}
  const dispatch = useDispatch();
  const pokemonList = useSelector(state => state.pokemonReducer.pokemonArray);
  const koreanList = useSelector(state => state.pokemonReducer.koreanArray);

  const pokemonData = pokemonList.find(data => data.name === name);
  const koreanData = koreanList.find(data => data.name === name);
  const pokemonImage = pokemonData.sprites.other.dream_world.front_default;
  const koreanName = koreanData.names[2].name;


  return (
    <div>
      <img src={pokemonImage} alt={name} style={style}/>
      {koreanName}
      <button onClick={() => dispatch(likePokemon(name))}>삭제</button>
    </div>
  )
}

export default PokemonItem
