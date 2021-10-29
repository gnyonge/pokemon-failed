import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getKoreanData } from '../App';

const PokemonDetail = ({ match }) => {
  
  const name = match.params.name;
  const pokemonArray = useSelector(state => state.pokemonReducer.pokemonArray)
  const pokemon = pokemonArray.find(pokemon => pokemon.name === name)
  const koreanArray = useSelector(state => state.pokemonReducer.koreanArray)
  const pokemonInKorean = koreanArray.find(pokemon => pokemon.name === name)


  const [pokemonDetails, setPokemonDetails] = useState(pokemon);
  const [dataInKorean, setDataInKorean] = useState(pokemonInKorean);
  const [loading, setLoading] = useState(true);

  // const getKoreanName = async (name) => {
  //   const res = await getKoreanData(name);
  //   setDataInKorean(res)
  //   setLoading(false);
  // } 
  
  // const getPokemon = async (name) => {
  //   const details = await fetchPokemon(name);
  //   setPokemonDetails(details);
  //   setLoading(false);
  // }

  useEffect(() => {
    setLoading(false);
    // getKoreanName(name);
    // getPokemon(name);
  }, [])

  
  return (
    <div className="card-container">
      {loading ? (
        <h1>로딩중...</h1>
      ) : (
        <div className="detail-container">
          <div className="image-container">
            <img className="detail-image" src={pokemonDetails.sprites.other.dream_world.front_default} alt={pokemonDetails.name}/>
            <p>pokemon</p>
            <div className="sizes">
              <h1>{dataInKorean.names[2].name}</h1>
            </div>
          </div>
          <div className="product">
            <div>
              <div className="genera-container">
                <h2>{dataInKorean.genera[1].genus}</h2>
              </div>
              <div className="desc">
                <ul>
                  <li>
                  {dataInKorean.flavor_text_entries[23].flavor_text}
                  </li>
                  <li>
                  {dataInKorean.flavor_text_entries[31].flavor_text}
                  </li>
                  <li>
                  {dataInKorean.flavor_text_entries[39].flavor_text}
                  </li>
                </ul>
              </div>
            </div>
            <div className="button-container">
              <button className="add">like this pokemon</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PokemonDetail;
