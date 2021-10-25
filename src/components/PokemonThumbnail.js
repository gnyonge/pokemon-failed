import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PokemonThumbnail = ({ id, name, image, type }) => {
  const style = `thumb-container ${type}`

  const getKoreanName = (name) => {
    axios.get(`https//pokeapi.co/api/v2/pokemon-species/${name}`)
    .then(res => {
      console.log(res, 'ad')
      return res.data.names[2].name
    })
  } 
  const nameInKorean = getKoreanName(name)
    
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
