import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PokemonThumbnail = ({ id, name, image, type }) => {
  const style = `thumb-container ${type}`;
  const pokemonArray = useSelector(state => state.pokemonReducer.koreanArray)
  const pokemon = pokemonArray.find(pokemon => pokemon.name === name)
  const pokemonName = pokemon.names[2].name
  const [nameInKorean, setNameInKorean] = useState(pokemonName);
  
  // const getKoreanName = async (name) => {
  //   const res = await getKoreanData(name);
  //   setNameInKorean(res.names[2].name)
  // } 
  
  // useEffect(() => {
  //   getKoreanName(name)
  // }, [])

  return (
    <div className={style}>
      <div className="number">
        <small>#{id}</small>
      </div>
      <Link to={`/pokemon/${name}`}>
        <img src={image} alt={name} />
      </Link>
      <div className="detail-wrapper">
        <h3>{nameInKorean}</h3>
        <small>Type: {type}</small>
      </div>
    </div>
  )
}

export default PokemonThumbnail
