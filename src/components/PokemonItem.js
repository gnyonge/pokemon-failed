import React from 'react';
import { useDispatch } from 'react-redux';
import { likePokemon } from '../modules/pokemonReducer';

const PokemonItem = ({ name, koreanName, image }) => {
  const style = {width: '150px'}
  const dispatch = useDispatch();

  return (
    <div>
      <img src={image} alt={name} style={style}/>
      {koreanName}
      <button onClick={() => dispatch(likePokemon(name))}>삭제</button>
    </div>
  )
}

export default PokemonItem
