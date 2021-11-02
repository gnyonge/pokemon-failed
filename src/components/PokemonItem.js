import React from 'react';
import { useDispatch } from 'react-redux';
import { likePokemon } from '../modules/pokemonReducer';

const PokemonItem = ({ name, koreanName, image }) => {
  const style = {width: '150px'}
  const dispatch = useDispatch();

  return (
    <div className="item-container">
      <img src={image} alt={name} style={style}/>
      <div>
        <div className="item-name">{koreanName}</div>
        <button className="delete" onClick={() => dispatch(likePokemon(name))}>X</button>
      </div>
    </div>
  )
}

export default PokemonItem
